
import React, { useState } from 'react'
import useProducts from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'

export default function Products() {
  const { products } = useProducts()
  const [query, setQuery] = useState('')

  const filtered = products.filter((p) => {
    const q = query.toLowerCase()
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.origin || '').toLowerCase().includes(q)
    )
  })

  return (
    <section style={{ padding: 20 }}>
      <h2>Products</h2>
      <SearchBar value={query} onChange={setQuery} />
      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {filtered.length === 0 && <p>No products found.</p>}
    </section>
  )
}
