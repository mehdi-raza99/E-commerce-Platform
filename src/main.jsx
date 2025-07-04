import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ProductProvider } from './context/Products.context.jsx'
import { CartProvider } from './context/Cart.context.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <ProductProvider> */}
          {/* <CartProvider> */}
              <App />
          {/* </CartProvider> */}
      {/* </ProductProvider> */}
    </Provider>
  </StrictMode>,
)
