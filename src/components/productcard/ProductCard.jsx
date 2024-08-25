// import React, { useContext } from 'react'
// import myContext from '../../context/data/myContext'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart } from '../../redux/cartSlice'


// function ProductCard() {
//     const context = useContext(myContext)
//     const { mode } = context

//     const dispatch = useDispatch();

//     const addCart =()=>{
//         dispatch(addToCart(products));

//     }

//     const cartItem = useSelector((state)=>state.cart)
//     console.log(cartItem)

//     const products = [
//         { id: 1, title: 'This is title', price: 598765e00, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//             },
//         { id: 2, title: 'This is title', price: 500, image: 'https://dummyimage.com/720x400' },
//         { id: 3, title: 'This is title', price: 500, image: 'https://dummyimage.com/720x400' },
//         { id: 4, title: 'This is title', price: 500, image: 'https://dummyimage.com/720x400' }
//     ]

//     return (
//         <section className="text-gray-600 body-font">
//             <div className="container px-5 py-8 md:py-16 mx-auto">
//                 <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
//                     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
//                     <div className="h-1 w-20 bg-pink-600 rounded"></div>
//                 </div>

//                 <div className="flex flex-wrap -m-4">
//                     {products.map((product) => (
//                         <div key={product.id} className="p-4 md:w-1/4 drop-shadow-lg">
//                             <div
//                                 className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
//                                 style={{
//                                     backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
//                                     color: mode === 'dark' ? 'white' : '',
//                                 }}
//                             >
//                                 <div className="flex justify-center cursor-pointer">
//                                     <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={product.image} alt="product" />
//                                 </div>
//                                 <div className="p-5 border-t-2">
//                                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>E-Bharat</h2>
//                                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{product.title}</h1>
//                                     <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {product.price}</p>
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
//     )
// }

// export default ProductCard


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
        { id: 1, title: 'Budweiser', price: 5985, image: "https://5.imimg.com/data5/YV/MG/AO/SELLER-46055130/budweiser-non-alcoholic-drinks.jpg" },
        { id: 2, title: 'Knockout', price: 500, image: 'https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/11/Knockout.jpg?size=*:900' },
        { id: 3, title: 'Kati Patang', price: 500, image: 'https://assets.gqindia.com/photos/5efae1cb62970f1a2bdbaa43/1:1/w_945,h_945,c_limit/top-image%20(19).jpg' },
        { id: 4, title: 'Can-Owl-', price: 500, image: 'https://img.freepik.com/premium-photo/can-owl-beer-with-red-background_962508-20654.jpg' }
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
                                    <h1 className="title-font text-lg font-medium text-blue-700 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{product.title}</h1>
                                    <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {product.price}</p>
                                    <div className="flex justify-center">
                                        <button type="button" className="focus:outline-none text-white bg-red-900 hover:bg-red-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2" onClick={() => addCart(product)}>Add To Cart</button>
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

