import { useEffect, useState } from 'react'

export default function useProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const savedJSON = localStorage.getItem('ms_products')
    const saved = savedJSON ? JSON.parse(savedJSON) : null

    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => {
        const initial = data.products || []
        if (!saved) {
          setProducts(initial)
          localStorage.setItem('ms_products', JSON.stringify(initial))
          return
        }

        const savedById = new Map(saved.map((item) => [item.id, item]))
        const merged = [...saved]
        initial.forEach((item) => {
          if (!savedById.has(item.id)) merged.push(item)
        })

        setProducts(merged)
        localStorage.setItem('ms_products', JSON.stringify(merged))
      })
      .catch(() => {
        if (saved) {
          setProducts(saved)
        } else {
          setProducts([])
        }
      })
  }, [])

  function addProduct(product) {
    const nextId = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1
    const newProduct = { id: nextId, ...product }
    const updated = [...products, newProduct]
    setProducts(updated)
    localStorage.setItem('ms_products', JSON.stringify(updated))
    return newProduct
  }

  function updateProduct(id, changes) {
    const updated = products.map((p) => (p.id === Number(id) ? { ...p, ...changes } : p))
    setProducts(updated)
    localStorage.setItem('ms_products', JSON.stringify(updated))
  }

  return { products, addProduct, updateProduct, setProducts }
}
