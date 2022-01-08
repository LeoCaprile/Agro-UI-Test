import React, {useState} from 'react'
import '../assets/styles/components/Header.scss'
import Navbar from './Navbar';

const Header = () => {

	const [ mobileMenu, setMobileMenu ] = useState(false);

    return (
      <>
      <header className='header'>
              <div className='header__title'>
              <h2>HTML</h2>
              <h1>5</h1>
              </div>
              <div onClick={()=>{setMobileMenu(!mobileMenu)}} className='header__burger'>
                <span></span>
                <span></span>
                <span></span>
              </div>
        </header>
        <Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/>
      </>
            

    )
}

export default Header
