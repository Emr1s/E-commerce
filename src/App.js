import React from 'react'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import './App.scss'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/products/:id',
        element: <Products />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
