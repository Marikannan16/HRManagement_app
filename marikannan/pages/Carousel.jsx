import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { useState,useEffect } from "react"
export default function Carousel ({children:slides,autoSlide=false,autoSlideInterval=3000}){
  const [curr,setCurr]=useState(0)
  const prev=()=>{
    setCurr((curr)=>(curr===0 ? slides.length-1 :curr-1))
  }
  
  const next=()=>{
    setCurr((curr)=>(curr===slides.length-1 ? 0 :curr+1))
  }
  useEffect(() => {
    if(!autoSlide) return 
    const slideInterval=setInterval(next,autoSlideInterval)
    return ()=>clearInterval(slideInterval)
  }, [])
  
  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{transform:`translateX(-${curr*100}%)`}}>{slides}</div>
      {/* <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"><BiChevronLeft size={40}/></button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"><BiChevronRight size={40}/></button>
      </div> */}
      <div className="absolute bottom-4 right-0 left-0">
      <div className="flex items-center justify-center gap-2">
        {slides.map((_,i)=>(<div className={`transition-all w-1 h-1 bg-gray-500 rounded-full ${curr===i ? "p-1":"bg-opacity-50" }`}></div>))}

      </div>

      </div>
    </div>
  )
}

// import React, { useState,useEffect } from 'react'

// const Carousel = ({images}) => {
//     const [index,setIndex]=useState(0);
//     useEffect(() => {
//       const intervel=setInterval(()=>{
//         setIndex((prev)=>prev===images.length-1 ? 0 :prev+1);
//       },3000)

//       return () => clearInterval(intervel);
//     }, [images.length])

//   return (
//     <div className="relative w-full overflow-hidden">
//         <div className="flex transition-transform duration-500" style={{transform :`translateX(-${index *100})%`}}>
//             {images.map((image,index)=>(<div key={index} className="min-w-full">
//                 <img src={image} className="w-full h-auto"/>
//                 </div>
//         ))}
//         </div>
//         <div className="absolute inset-0 flex items-center justify-between">
//             <button onClick={()=>setIndex(index===0 ? images.length-1 : index-1)} className="bg-gray-500 text-white p-2 rounded-lg">p</button>
//             <button onClick={()=>setIndex((index+1) % images.length)} className="bg-gray-500 text-white p-2 rounded-lg">p</button>
//         </div>
//     </div>
//   )
// }

// export default Carousel
