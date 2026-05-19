const STORAGE_KEY = 'ms_products'

function getSavedProducts() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) return null
  try {
    return JSON.parse(saved)
  } catch {
    return null
  }
}

function saveProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}

export async function readProducts() {
  const saved = getSavedProducts()
  try {
    const response = await fetch('/db.json')
    const data = await response.json()
    const initial = data.products || []
    if (!saved) {
      saveProducts(initial)
      return initial
    }
    const savedIds = new Set(saved.map((item) => item.id))
    const merged = [...saved]
    initial.forEach((item) => {
      if (!savedIds.has(item.id)) merged.push(item)
    })
    if (merged.length !== saved.length) saveProducts(merged)
    return merged
  } catch {
    return saved || []
  }
}

export async function createProduct(payload) {
  const products = await readProducts()
  const nextId = products.length ? Math.max(...products.map((product) => product.id)) + 1 : 1
  const newProduct = { id: nextId, ...payload }
  const updated = [...products, newProduct]
  saveProducts(updated)
  return newProduct
}

export async function updateProduct(id, changes) {
  const products = await readProducts()
  const updated = products.map((product) =>
    product.id === Number(id) ? { ...product, ...changes } : product,
  )
  saveProducts(updated)
  return updated
}

export async function deleteProduct(id) {
  const products = await readProducts()
  const updated = products.filter((product) => product.id !== Number(id))
  saveProducts(updated)
  return updated
}
