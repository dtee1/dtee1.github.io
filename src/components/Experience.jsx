// import React from 'react'
// import Html from "../assets/html.png"
// import Css from "../assets/css.png"
// import Javascript from "../assets/javascript.png"
// import Tailwind from "../assets/tailwind.png"
// import Graphql from "../assets/graphql.png"

// const Experience = () => {
    
//     const skills = [
//         {
//             id: 1,
//             src: Html,
//             title: 'HTML',
//             style: 'shadow-orange-500'
//         },
//         {
//             id: 2,
//             src: Css,
//             title: 'CSS',
//             style: 'shadow-blue-500'
//         },
//         {
//             id: 3,
//             src: Javascript,
//             title: 'Javascript',
//             style: 'shadow-yellow-500'
//         },
//         {
//             id: 4,
//             src: Tailwind,
//             title: 'Tailwind',
//             style: 'shadow-sky-400'
//         },
//         {
//             id: 5,
//             src: Graphql,
//             title: 'GraphQL',
//             style: 'shadow-pink-400'
//         },
//     ]
//     return (
//     <div name='experience' className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
//         <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
//             <div>
//                 <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//                     Experience
//                 </p>
//                 <p className="py-6">These are my skills and knowledge</p>
//             </div>
//             <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
//                 {skills.map(({id, src, title, style}) => (
//                     <div 
//                         className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
//                         key={id}
//                     >
//                         <img src={src} alt="" className="w-20 mx-auto"/>
//                         <p className="mt-4">{title}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Experience