import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav =() => {
        setNav(!nav)
    }
  return (
    <div className='text-white flex justify-between items-center h-24  max-auto px-4 '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] '>ReadsBySuki</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Blog</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? 'block md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-950 ease-in-out duration-500': 'fixed left-[100%]'}>
        <ul className='pt-24 uppercase '>
            <li className='p-4'>Blog</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul> 
        </div>
    </div>
  )
}

export default Navbar