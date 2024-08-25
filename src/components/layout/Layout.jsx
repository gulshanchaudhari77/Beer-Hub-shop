import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../navbar/footer/Footer'
//kuch componenet constent hote hai isliye nav footer

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='content'>
            {children}
        </div>

        
        
    </div>
  )
}

export default Layout