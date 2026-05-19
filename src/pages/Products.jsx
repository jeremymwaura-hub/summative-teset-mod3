
import React, { useState } from 'react'
import useProducts from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'

export default function Products() {
   const { products, status } = useProducts()
   const [query, setQuery] = useState('')
 
   const filtered = products.filter((p) => {
     const q = query.toLowerCase()
     return (
       p.name.toLowerCase().includes(q) ||
       p.description.toLowerCase().includes(q) ||
       (p.origin || '').toLowerCase().includes(q)
     )
   })
 
   if (status === 'loading') {
     return (
       <section className="page">
         <p className="note-box">Loading products...</p>
       </section>
     )
   }
 
   return (
     <section className="page">
       <div className="page-actions">
         <div>
           <h2 className="page-title">Products</h2>
           <p className="page-subtitle">Search or tap any product to update its price.</p>
         </div>
       </div>
       <SearchBar value={query} onChange={setQuery} />
       <p className="note-box">Showing {filtered.length} product{filtered.length === 1 ? '' : 's'}.</p>
       <div className="grid">
         {filtered.map((p) => (
           <ProductCard key={p.id} product={p} />
         ))}
       </div>
       {filtered.length === 0 && <p className="note-box">No products found.</p>}
     </section>
   )
 }
