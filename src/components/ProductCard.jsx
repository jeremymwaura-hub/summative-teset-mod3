import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <h3>{product.name}</h3>
      <p className="muted">{product.origin}</p>
      <p>{product.description}</p>
      <div className="card-footer">
        <strong>${product.price.toFixed(2)}</strong>
        <Link to={`/products/${product.id}`} className="details">View</Link>
      </div>
    </article>
  )
}
