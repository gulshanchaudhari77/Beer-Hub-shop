import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/navbar/footer/Footer'
import Layout from './components/layout/Layout'
import { Route, Router, Routes , Link } from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import NoPage from './pages/nopage/NoPage'
import MyState from './context/data/MyState'
import Login from './pages/regestration/Login'
import Signup from './pages/regestration/Signup'
import ProductInfo from './components/productinfo/ProductInfo'
import Addproduct from './components/page/Addproduct'
import Updateproduct from './components/page/Updateproduct'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AllProducts from './pages/allproducts/AllProducts'
  


const App = () => {
  return (
  
    
   <>
   <MyState>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/productinfo/:id' element={<ProductInfo/>}/>
      <Route path='addproduct' element={<Addproduct/>}/>
      <Route path='updateproduct' element={<Updateproduct/>}/>
      <Route path='allproducts' element={<AllProducts/>}/>


      <Route path='/*' element={<NoPage/>}/>


    </Routes>
    <ToastContainer/>

    </MyState>

   
   </>
   

  
    

  )
}

export default App