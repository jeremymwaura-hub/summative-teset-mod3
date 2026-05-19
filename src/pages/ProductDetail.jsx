import { useParams } from 'react-router-dom'
import React, { useState } from 'react'
import useProducts from '../hooks/useProducts'

export default function ProductDetail() {
  const { id } = useParams()
  const { products, updateProduct } = useProducts()
  const product = products.find((p) => p.id === Number(id))
  const [price, setPrice] = useState(product ? product.price : '')

  if (!product) return <p style={{ padding: 20 }}>Product not found.</p>

  function save() {
    const parsed = Number(price)
    if (Number.isFinite(parsed)) {
      updateProduct(id, { price: parsed })
      alert('Price updated')
    }
  }

  return (
    <section className="page">
      <div className="product-detail-card">
        <h2 className="page-title">{product.name}</h2>
        <p className="muted">{product.origin}</p>
        <p>{product.description}</p>
        <div className="form-row">
          <label>
            New price
            <input value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <button type="button" onClick={save} className="button btn-primary">Save</button>
        </div>
      </div>
    </section>
  )
}
