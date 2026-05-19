import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import AddProduct from './pages/AddProduct'
import Navbar from './components/Navbar'
import { ProductsProvider } from './context/ProductsContext'

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/add" element={<AddProduct />} />
          </Routes>
        </main>
      </ProductsProvider>
    </BrowserRouter>
  )
}

export default App
