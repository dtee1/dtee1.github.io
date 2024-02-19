import React from 'react'
import dtee from '../assets/dtee.jpg'
import {BsArrowRight} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-3xl sm:text-4xl font-bold mx-3"> 
                    AI Engineer
                </h2>
                <p className="text-gray-500 py-4 mx-3 max-w-md">
                    Interested in the application of artificial intelligence to solve real world problems
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 mx-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300">
                            <BsArrowRight size={25} className="ml-3"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={dtee} alt="me" className="rounded-2xl mx-auto w-80 mb-20"/>
            </div>
        </div>
    </div>
  )
}

export default Home