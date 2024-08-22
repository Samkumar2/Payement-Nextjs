import React from 'react'
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';


const Navbar = () => {
  return (
   <nav className="flex  space-x-5 border-b mb-5 px-5 h-14 items-center">
    <Link href="/"><AiFillBug/></Link>
    <ul className='flex space-x-5'>
     <li> <Link href="/">Dashboard</Link> </li>   
     <li> <Link href="/payment">Payment</Link> </li>  
    </ul> 
   </nav>
  )
}

export default Navbar ;