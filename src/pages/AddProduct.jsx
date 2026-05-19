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
    <section className="page">
      <h2 className="page-title">Add Product</h2>
      <form onSubmit={submit} className="form-card">
        <label>
          Product name
          <input ref={nameRef} placeholder="Product name" required />
        </label>
        <label>
          Origin
          <input ref={originRef} placeholder="Origin" />
        </label>
        <label>
          Short description
          <textarea ref={descRef} placeholder="Short description" />
        </label>
        <label>
          Price
          <input ref={priceRef} placeholder="Price" type="number" step="0.01" />
        </label>
        <button type="submit" className="button btn-primary">Add product</button>
      </form>
    </section>
  )
}
