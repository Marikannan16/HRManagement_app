import React, { useState } from 'react'
import { HiOutlineDownload, HiDotsVertical} from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import data from './Datas';
import columns from './Columns';




const Catlist = () => {

    const[Search,setSearch]=useState();

    return (
        <>
            <div className='flex m-5 justify-between'>
                <h2 className='font-semibold text-lg'>Category List</h2>
                <div className='flex gap-3'>
                    <HiOutlineDownload className='w-8 h-8 p-1 rounded-full mt-1' style={{ backgroundColor: '#D7B95F' }} color='white' />
                    <button className='py-2 w-36 rounded-md text-white' style={{ backgroundColor: '#D7B95F' }}>Create Category</button>
                </div>
            </div>


            <div className='m-5'>
                <div className='relative'>
                    <input type='text' className='m-5 focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-md text-black border-gray-300  px-7 py-2 rounded-md ' value={Search} placeholder='Search' onChange={(e)=>setSearch(e.target.value)} ></input>

                    <div className='absolute inset-y-0 top-5 left-6' style={{ opacity: '0.5' }}>
                        <IoIosSearch size={22} />
                    </div>
                </div>

                <div className=''>
                <DataTable
                    columns={columns}
                    data={data} selectableRows sortIcon={<PiCaretUpDownFill />}>
                    actions={< HiDotsVertical/>}    
                </DataTable>
                </div>
            </div>
        </>
    )
}

export default Catlist
