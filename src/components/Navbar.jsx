import React from 'react'
import '../assets/styles/components/Navbar.scss'

const Navbar = ({mobileMenu, setMobileMenu}) => {


    return (
        
        <nav className={`navbar ${mobileMenu?'notActive':''}`}>
        <div onClick={()=>{setMobileMenu(!mobileMenu)}} className='navbar__close'>
            <span></span>
            <span></span>
        </div>
        <a href='/' className='navbar__link'>Link 1</a>
        <a href='/' className='navbar__link'>Link 2</a>
        <a href='/' className='navbar__link'>Link 3</a>
        <a href='/' className='navbar__link'>Link 4</a>
        <a href='/' className='navbar__link'>Link 5</a>
        </nav>

        
        
             
    )
}

export default Navbar
