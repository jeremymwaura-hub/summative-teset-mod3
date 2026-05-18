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
    <section style={{ padding: 20 }}>
      <h2>{product.name}</h2>
      <p className="muted">{product.origin}</p>
      <p>{product.description}</p>
      <div style={{ marginTop: 12 }}>
        <label>
          Price: <input value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <button onClick={save} style={{ marginLeft: 8 }}>Save</button>
      </div>
    </section>
  )
}
