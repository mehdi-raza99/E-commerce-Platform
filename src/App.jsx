import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';  
import Home from './pages/Home';
import MainLayout from './components/MainLayout';
import ProductListing from './components/ProductListing';
import { useEffect, useState } from 'react';
import { fetchProductByCategory } from './utils/fetchProductsByCategory';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';


function App() {

  const [productList,setProductList]=useState([])
  const [productName,setProductName]=useState("")

  useEffect(() => {
    let data=fetchProductByCategory(productName)
    if(data)
      setProductList(data)
  },[productName])

  const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'checkout',
        element: <Cart />
      },
      {
        path: ':category',
        element: <ProductListing />
      }
    ]
  },
  ])
  return <RouterProvider router={router} />;
}

export default App
