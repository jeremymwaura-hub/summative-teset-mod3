import React, { createContext, useContext, useEffect, useState } from 'react'
import { createProduct, deleteProduct, readProducts, updateProduct } from '../services/productService'

const ProductsContext = createContext(null)

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    readProducts()
      .then((items) => setProducts(items))
      .finally(() => setStatus('ready'))
  }, [])

  const addProduct = async (payload) => {
    const next = await createProduct(payload)
    setProducts((current) => [...current, next])
    return next
  }

  const editProduct = async (id, changes) => {
    const updated = await updateProduct(id, changes)
    setProducts(updated)
    return updated.find((product) => product.id === Number(id))
  }

  const removeProduct = async (id) => {
    const updated = await deleteProduct(id)
    setProducts(updated)
    return updated
  }

  return (
    <ProductsContext.Provider value={{ products, status, addProduct, editProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default function useProducts() {
  const value = useContext(ProductsContext)
  if (!value) {
    throw new Error('useProducts must be used inside ProductsProvider')
  }
  return value
}
