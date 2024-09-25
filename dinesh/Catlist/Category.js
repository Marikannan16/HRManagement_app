import React from 'react'


const Category = () => {
    return (
        <>
            <div className='flex justify-between items-center my-5 mx-3' >
                <h2 className='font-semibold text-lg'>Create Category</h2>
                <button className=' text-white  py-2  w-36  rounded-md ' style={{backgroundColor:'#D7B95F',
                    
                }} >Category List </button>
            </div>

            <div className='my-3 mx-10'>
                <h4 className='font-semibold'>Category</h4>
                <input type='text' className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 w-full lg:w-1/2 px-3 py-2 rounded-md' placeholder='Enter Category'></input>
                 
            </div>
            <div className='flex justify-center mt-96 gap-5'>
                <button className=' rounded-md border border-black py-2 w-36'>Cancel</button>
                <button className='text-white hover:bg-yellow-400 rounded-md py-2 w-36' style={{backgroundColor:'#D7B95F'}}>Save</button>
            </div>
          






        </>
    )
}

export default Category
