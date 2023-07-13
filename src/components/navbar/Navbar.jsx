import React from 'react'
import Navbarleft from './navbarItem/Navbarleft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-5'>
    <Navbarleft/>
    <NavbarRight/>
    </div>
  )
}

export default Navbar