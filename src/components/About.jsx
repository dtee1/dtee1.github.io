import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-20">
            <div className="pb-4">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
          <p className="text-xl mt-20">
            I have a passion for designing, scaling, and maintaining software. 
            I obtained an Electrical Engineering degree from Carleton University 
            where my co-op experience was hardware focused. After working in the idustry 
            for some time, I decided to pursue a career in software engineering. I am currently pursing a 
            part time master's degree in Applied Artificial Intelligence at University of Ottawa.
          </p>
          <br/>
        </div>
    </div>
  )
}

export default About