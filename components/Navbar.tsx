"use client"
import React from 'react'
import {Link as LinkScroll} from 'react-scroll';




const Navbar = () => {


    const NavLink = ({title}:{title:string}})=>(
        <LinkScroll
            to={title}
            offset={-100}
            spy
            smooth
            className='cursor-pointer text-white hover:border-b-2 hover:border-[#F3AAFF] transition duration-300 ease-in-out'
        >
            {title}
        </LinkScroll>
    );

  return (
    <div className='flex justify-between items-center p-4 bg-black text-white'>
        <div className='text-2xl font-bold w-1/2 px-3'>
            Logo
        </div>
        <div className='w-1/2'>
            <ul className='flex justify-between items-center px-6 py-4 '>  
                <li>
                    <NavLink title="Home"/>
                </li>
                <li><NavLink title="Features"/></li>
                <li><NavLink title="Contact"/></li>

                <li><NavLink title="Join"/></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar