import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
  return (
    <div name="navbar" className="flex flex-col w-full h-25 text-white bg-black fixed pt-2">
        <div className="flex justify-between items-center w-full h-10 text-white bg-black px-4">
            <div>
                <h1 className="text-5xl font-logo ml-2">dtee</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li 
                        key={id} 
                        className="px-4 cursor-pointer capitalize font-medium text-2xl text-gray-500 hover:scale-105 duration-200"
                        >
                            <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                    <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
            )}
        </div>
        <div className="flex w-full h-10 justify-start pb-1 px-1 text-white">
                <p className="text-2xl font-bold inline border-t-2 border-gray-500">
                    {date}
                </p>
        </div>
        
    </div>
  )
}

export default NavBar
