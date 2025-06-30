import React from 'react'

const NavBar = () => {
  return (
    <nav className='nav-container navbar-background p-4 flex items-center justify-between'>
        <p className='logo text-3xl mx-10 text-white inria'>StaticPlus</p>
        <div className='router-links flex mx-10 space-x-6 text-gray-800 font-bold text-lg'>
            <a href="#" className='hover:text-white'>About</a>
            <a href="#" className='hover:text-white'>Home</a>
            <a href="#" className='hover:text-white'>Login</a>
        </div>
    </nav>
  )
}

export default NavBar
