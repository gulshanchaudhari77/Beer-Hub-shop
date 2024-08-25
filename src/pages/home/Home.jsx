import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import Hero from '../../components/herosection/Hero';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productcard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import Footer from '../../components/navbar/footer/Footer';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import BeerInfo from '../../components/info/BeerInfo';

const Home = () => {
  // const context = useContext(myContext);
//destructuring kiye hai ae 
// const {name,rollno}=context;

const dispatch = useDispatch();
const cartItem = useSelector((state)=>state.cart)
console.log(cartItem)

const addCart=()=>{
  dispatch(addToCart("shirt"));
}

const deletecart=()=>{
  dispatch(deleteFromCart("shirt"));
}
  
  return (
    <Layout>
      
      
       <Hero/>
       <Filter/>
       <ProductCard/>
       <Track/>
       <BeerInfo/>
      <Testimonial/> 
    </Layout>
  )
}

export default Home