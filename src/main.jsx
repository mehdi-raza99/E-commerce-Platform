import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ProductProvider } from './context/Products.context.jsx'
import { CartProvider } from './context/Cart.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </ProductProvider>
  </StrictMode>,
)
