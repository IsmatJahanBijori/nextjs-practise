import Link from 'next/link'
import React from 'react'
import First1 from './first1'

const Navbar = () => {
  return (
    <div>
    <nav className='p-10 text-center font-serif font-semibold'>
    <ul className='flex'>
    <Link href='/'><li className='mr-10'>Home</li></Link>
    <Link href='/about'><li className='mr-10'>About</li></Link>
    <Link href='/blog'><li className='mr-10'>Blog</li></Link>
    <Link href='/contact'><li className='mr-10'>Contact</li></Link>
    <Link href='/dashboard'><li className='mr-10'>Dashboard</li></Link>
    <Link href='/dashboard1'><li className='mr-10'>Dashboard1</li></Link>
    <div className='flex flex-col'>
    <Link href='/sidebar1'><li className='mr-10'>Sidebar1</li></Link>
    <Link href='/sidebar2'><li className='mr-10'>Sidebar2</li></Link>
    </div>
    </ul>

    <h1 className='my'>Hello Coders</h1>
  </nav>
  <First1/>
    </div>
  )
}

export default Navbar
