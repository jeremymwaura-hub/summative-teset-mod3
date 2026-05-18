import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">Moringa Market</Link>
      </div>
      <div className="nav-right">
        <Link to="/products">Products</Link>
        <Link to="/add" className="cta">Add Product</Link>
      </div>
    </nav>
  )
}
