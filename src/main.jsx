import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ProductProvider } from './context/Products.context.jsx'
import { CartProvider } from './context/Cart.context.jsx'
import { Provider } from 'react-redux'
import { store , persistor } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
PersistGate

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} >
      {/* <ProductProvider> */}
          {/* <CartProvider> */}
              <App />
          {/* </CartProvider> */}
      {/* </ProductProvider> */}
        </PersistGate>
    </Provider>
  </StrictMode>,
)
