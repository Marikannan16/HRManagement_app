import React from 'react'
import { PiLessThanBold } from "react-icons/pi";
import data from '../Category/Datas';
const Subcat = () => {
    return (
        <>
            <div className='flex m-5  justify-between'>
                <h2 className='font-semibold text-lg'> Create Sub Category</h2>
                <div className='flex '>
                    <button className='flex items-center justify-center px-4 py-3 gap-5 rounded-md text-white'
                        style={{ backgroundColor: '#D7B95F' }}>
                        <PiLessThanBold className='text-sm mt-1' />
                        Back To List</button>
                </div>
            </div>
            <div className='flex justify-items-stretch'>
                <div className='mx-10 w-1/2 '>
                    <h4 className='font-semibold'>Category</h4>
                    <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10 w-9/12 px-5 rounded-md'>
                    {data.map((item)=><option value={item.category}>{item.category}</option>)}                 
                    </select>

                </div>
                <div className='mr-10 w-1/2'>
                    <h4 className='font-semibold'>Sub Category</h4>
                    <input type='text' className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300  h-10 w-9/12 px-5 rounded-md' placeholder='Enter The Sub Category'></input>

                </div>

            </div>
        </>
    )
}
export default Subcat
