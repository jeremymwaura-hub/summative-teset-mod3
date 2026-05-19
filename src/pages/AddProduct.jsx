import React, { useId, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
 
 export default function AddProduct() {
   const nameRef = useRef()
   const originRef = useRef()
   const descRef = useRef()
   const priceRef = useRef()
   const nameId = useId()
   const originId = useId()
   const descId = useId()
   const priceId = useId()
   const { addProduct } = useProducts()
   const nav = useNavigate()
 
   async function submit(e) {
     e.preventDefault()
     const product = {
       name: nameRef.current.value,
       origin: originRef.current.value,
       description: descRef.current.value,
       price: Number(priceRef.current.value) || 0,
     }
     await addProduct(product)
     nav('/products')
   }
 
   return (
     <section className="page">
       <h2 className="page-title">Add Product</h2>
       <form onSubmit={submit} className="form-card">
         <label htmlFor={nameId}>
           Product name
           <input id={nameId} ref={nameRef} placeholder="Product name" required />
         </label>
         <label htmlFor={originId}>
           Origin
           <input id={originId} ref={originRef} placeholder="Origin" />
         </label>
         <label htmlFor={descId}>
           Short description
           <textarea id={descId} ref={descRef} placeholder="Short description" />
         </label>
         <label htmlFor={priceId}>
           Price
           <input id={priceId} ref={priceRef} placeholder="Price" type="number" step="0.01" />
        </label>
        <button type="submit" className="button btn-primary">Add product</button>
      </form>
    </section>
  )
}
