import React from 'react'

const Createcomp = () => {
  return (
   <>
       <div className='flex justify-between items-center my-5 mx-3' >
                <h2 className='font-semibold text-lg'>Create Nature Of Compliance</h2>
                <button className=' text-white  py-2  w-52  rounded-md ' style={{backgroundColor:'#D7B95F'}} > Nature Of Compliance List </button>
       </div>
       <div className='m-10 mb-5'>
                <h4 className='font-semibold'> Nature of compliance </h4> 
                <input type='text' className=' focus-visible focus-visible:outline-none  mt-3  bg-gray-100 border text-sm border-gray-300 w-full lg:w-1/2 px-3 py-2  rounded-md' placeholder='Statutory Payment'></input>
       </div>

       <div className='flex justify-center mt-80 gap-5'>
       <button className=' rounded-md border border-black py-2 w-36'>Cancel</button>
       <button className='text-white rounded-md py-2 w-36' style={{backgroundColor: '#D7B95F'}} > Save </button>
       </div>
   
   
   </>
  )
}

export default Createcomp
