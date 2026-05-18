import React from 'react'

export default function SearchBar({ value, onChange, placeholder = 'Search products...' }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <input
        aria-label="search"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: 8, width: '100%', maxWidth: 400 }}
      />
    </div>
  )
}
