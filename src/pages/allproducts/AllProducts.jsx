// import React from 'react'
// import Layout from '../../components/layout/Layout'
// import Hero from '../../components/herosection/Hero'
// import { useContext } from 'react'
// import myContext from '../../context/data/myContext'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart } from '../../redux/cartSlice'





// const AllProducts = () => {
//   // const context = useContext(myContext)
//   //   const { mode } = context
//   const context = useContext(myContext);
//   const{mode}=context;

//   const dispatch = useDispatch();

//     const addCart =()=>{
//         dispatch(addToCart(data));

//     }

//     const cartItem = useSelector((state)=>state.cart)
//     console.log(cartItem)

  
    
//   const data = [
//     {
//       id: 1,
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       price: 109.95,
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       rating: {
//         rate: 3.9,
//         count: 120,
//       },
//     },
//     {
//       id: 2,
//       title: "Mens Casual Premium Slim Fit T-Shirts ",
//       price: 22.3,
//       description:
//         "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//       category: "men's clothing",
//       image:
//         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       rating: {
//         rate: 4.1,
//         count: 259,
//       },
//     },
//     {
//       id: 3,
//       title: "Mens Cotton Jacket",
//       price: 55.99,
//       description:
//         "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       rating: {
//         rate: 4.7,
//         count: 500,
//       },
//     },
//     {
//       id: 4,
//       title: "Mens Casual Slim Fit",
//       price: 15.99,
//       description:
//         "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//       rating: {
//         rate: 2.1,
//         count: 430,
//       },
//     },
//   ]

//   return (
//    <Layout>
       
//        <section className="text-gray-600 body-font">
//             <div className="container px-5 py-8 md:py-16 mx-auto">
//                 <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
//                     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
//                     <div className="h-1 w-20 bg-pink-600 rounded"></div>
//                 </div>

//                 <div className="flex flex-wrap -m-4">
//                     {data.map((data) => (
//                         <div key={data.id} className="p-4 md:w-1/4 drop-shadow-lg">
//                             <div
//                                 className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
//                                 style={{
//                                     backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
//                                     color: mode === 'dark' ? 'white' : '',
//                                 }}
//                             >
//                                 <div className="flex justify-center cursor-pointer">
//                                     <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={data.image} alt="product" />
//                                 </div>
//                                 <div className="p-5 border-t-2">
//                                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>E-Bharat</h2>
//                                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{data.title}</h1>
//                                     <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {data.price}</p>
//                                     <div className="flex justify-center">
//                                         <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2" onClick={()=>addCart()}>Add To Cart</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>

//    </Layout>
//   )
// }

// export default AllProducts

import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

function ProductCard() {
    const context = useContext(myContext);
    const { mode } = context;

    const dispatch = useDispatch();

    const addCart = (product) => {
        dispatch(addToCart(product));
    }

    const cartItem = useSelector((state) => state.cart);
    console.log(cartItem);

    const products = [
        { id: 1, title: 'DESI', price: 598765, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanV0Rt6DYMmCmxk4iLV_ahDNybfgmmt2w2w&s" },
        { id: 2, title: 'OLD MONK', price: 500, image: "https://images.unsplash.com/photo-1575719314727-64ce0e7a03d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwbW9ua3xlbnwwfHwwfHx8MA%3D%3D"},

        { id: 3, title: 'TBLENDER-PRIDE', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZS4KuCpuhFV-1IBl-NAmO5in-c_zEcW7Jw&s' },
        { id: 4, title: 'BRO-CODE', price: 500, image: 'https://i.pinimg.com/564x/09/68/de/0968deabccef0e837e1b58ae482eb3a8.jpg' }
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div className="h-1 w-20 bg-red-900 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {products.map((product) => (
                        <div key={product.id} className="p-4 md:w-1/4 drop-shadow-lg">
                            <div
                                className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                                style={{
                                    backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                                    color: mode === 'dark' ? 'white' : '',
                                }}
                            >
                                <div className="flex justify-center cursor-pointer">
                                    <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={product.image} alt="product" />
                                </div>
                                <div className="p-5 border-t-2">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>Beer-hub</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{product.title}</h1>
                                    <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {product.price}</p>
                                    <div className="flex justify-center">
                                        <button type="button" className="focus:outline-none text-white bg-red-900 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2" onClick={() => addCart(product)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;



