import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useProducts from '../hooks/useProducts'

export default function AddProduct() {
  const nameRef = useRef()
  const originRef = useRef()
  const descRef = useRef()
  const priceRef = useRef()
  const { addProduct } = useProducts()
  const nav = useNavigate()

  function submit(e) {
    e.preventDefault()
    const product = {
      name: nameRef.current.value,
      origin: originRef.current.value,
      description: descRef.current.value,
      price: Number(priceRef.current.value) || 0
    }
    addProduct(product)
    nav('/products')
  }

  return (
    <section style={{ padding: 20 }}>
      <h2>Add Product</h2>
      <form onSubmit={submit} style={{ display: 'grid', gap: 8, maxWidth: 480 }}>
        <input ref={nameRef} placeholder="Product name" required />
        <input ref={originRef} placeholder="Origin" />
        <textarea ref={descRef} placeholder="Short description" />
        <input ref={priceRef} placeholder="Price" type="number" step="0.01" />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  )
}
