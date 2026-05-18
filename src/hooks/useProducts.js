import { useEffect, useState } from 'react'

export default function useProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('ms_products')
    if (saved) {
      setProducts(JSON.parse(saved))
      return
    }

    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => {
        const initial = data.products || []
        setProducts(initial)
        localStorage.setItem('ms_products', JSON.stringify(initial))
      })
      .catch(() => setProducts([]))
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
