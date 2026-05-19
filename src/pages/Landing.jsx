import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="page">
      <h1 className="page-title">Moringa Market — Admin Portal</h1>
      <p className="page-subtitle">
        A simple administrator portal built by a Moringa student to manage a small
        product catalog — add, edit and search products.
      </p>
      <div className="page-actions">
        <Link className="button btn-secondary" to="/products">View Products</Link>
        <Link className="button btn-primary" to="/add">Add Product</Link>
      </div>
    </section>
  )
}
