import React from 'react'
import {Link} from "react-router-dom"
import NavMenu from './NavMenu'
import { useContext } from "react";                    
import { AuthContext } from "../context/auth.context"

const Header = () => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const { isLoggedIn, user } = useContext(AuthContext)
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
      isOpen ? document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'auto'
    }

  return (
    <header className='mx-auto flex items-center justify-between pt-2 px-8 sm:px-6 bg-heroGradient'>
      <Link to="/">
      <div>
      <img width="130" src="logo_hor.png" alt="MealGenie" />
      </div >
      </Link>
      <nav className='hidden sm:block'>
    <ul className='flex items-center gap-5 md:gap-10 sm:gap-4'>
  <li className='relative font-medium sm:text-xs text-xs md:text-lg after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[1px] after:scale-0 after:bg-black hover:after:scale-100 after:transition-transform'>
    test
  </li>
  <li className='relative font-medium md:text-lg text-xs sm:text-xs after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[1px] after:scale-0 after:bg-black hover:after:scale-100 after:transition-transform'>
    calories
  </li>
  <li className='relative font-medium md:text-lg text-xs sm:text-xs after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[1px] after:scale-0 after:bg-black hover:after:scale-100 after:transition-transform'>
    plan
  </li>
    </ul>
    </nav>

    <div className="flex justify-between md:text-lg text-xs sm:text-xs items-center p-4">

  <div className="relative font-medium pr-5">
    Account
  </div>

  <div className="block md:hidden z-20" >
    <button 
    className="burger-menu space-y-2 w-8 h-8 flex flex-col justify-between items-center pl-2 "
    onClick={toggleMenu } >
        <span
            className={`w-full h-1 transition-all duration-300 ${isOpen ? ('w-12  bg-white') : ('w-10  bg-black')} `}
          ></span>
             <span
            className={`w-full h-1 transition-all duration-300 ${isOpen ? ('w-12  bg-white') : ('w-10  bg-black')} `}
          ></span>
             <span
            className={`w-full h-1 transition-all duration-300 ${isOpen ? ('w-12  bg-white') : ('w-10  bg-black')} `}
          ></span>
    </button>
  </div>
  {isOpen && <NavMenu/>}
</div>
    <div>
    {isLoggedIn && (
            <>
              <button>Projects</button>
              <button>Logout</button>
            </>
          )}
    </div>
    <div>
    {!isLoggedIn && (
            <>
              <Link to="/signup"> <button>Sign Up</button> </Link>
              <Link to="/login"> <button>Login</button> </Link>
            </>
          )}
    </div>
   
    </header>
  )
}

export default Header
