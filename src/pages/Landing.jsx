import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section style={{ padding: 20 }}>
      <h1>Moringa Market — Admin Portal</h1>
      <p>
        A simple administrator portal built by a Moringa student to manage a small
        product catalog — add, edit and search products.
      </p>
      <div style={{ marginTop: 12 }}>
        <Link to="/products" style={{ marginRight: 12 }}>View Products</Link>
        <Link to="/add">Add Product</Link>
      </div>
    </section>
  )
}
