import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='nav-container navbar-background p-4 flex items-center justify-between'>
        <p className='logo text-3xl mx-10 text-white inria'>StaticPlus</p>
        <div className='router-links flex mx-10 space-x-6 text-gray-800 font-bold text-lg'>
          <Link href="/about" className='hover:text-white'>About</Link>
          <Link href="/" className='hover:text-white'>Home</Link>
          <Link href="/login" className='hover:text-white'>Login</Link>
        </div>
    </nav>
  )
}

export default NavBar
