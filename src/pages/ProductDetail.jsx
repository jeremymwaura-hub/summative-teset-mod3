import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import useProducts from '../hooks/useProducts'

export default function ProductDetail() {
  const { id } = useParams()
  const { products, editProduct, removeProduct } = useProducts()
  const nav = useNavigate()
  const product = products.find((p) => p.id === Number(id))
  const [price, setPrice] = useState(product ? product.price : '')
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (product) {
      setPrice(product.price)
    }
  }, [product])

  if (!product) return <p className="page">Product not found.</p>

  async function save() {
    const parsed = Number(price)
    if (Number.isFinite(parsed)) {
      await editProduct(id, { price: parsed })
      setFeedback('Price updated successfully')
      return
    }
    setFeedback('Please enter a valid price')
  }

  async function remove() {
    await removeProduct(id)
    nav('/products')
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
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <button type="button" onClick={save} className="button btn-primary">Save</button>
          <button type="button" onClick={remove} className="button btn-secondary">Delete</button>
        </div>
        {feedback && <p className="note-box">{feedback}</p>}
      </div>
    </section>
  )
}
