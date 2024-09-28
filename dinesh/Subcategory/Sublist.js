import React, { useState } from 'react'
import {HiOutlineDownload } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import columns from './Col';
import data from './Dat';

const Sublist = () => {
  const [Data] = useState(data)
  const [search, setSearch] = useState('')
  const filter = Data.filter((row) => {
      return (
          row.subcategory.toLowerCase().includes(search.toLowerCase())
      );
  })
  
  const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#000000',
            color: 'white',
            fontSize: '15px',
            padding: '10px'
        }
    }
}
const downloadCSV = () => {
  const csv = data.map(row => Object.values(row).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'Factory.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <>
     <div className='flex m-5 justify-between'>
                <h2 className='font-semibold text-lg'>Sub Category List</h2>
                <div className='flex gap-3'>
                    <button><HiOutlineDownload onClick={downloadCSV} className='w-9 h-9 p-2 rounded-full mt-1' style={{ backgroundColor: '#D7B95F' }} color='white' /></button>
                    <button className='py-3 w-52 rounded-md text-white' style={{ backgroundColor: '#D7B95F' }}>Create Sub Category</button>
                </div>
     </div> 
     <div className='flex justify-start -space-x-16 '>
              <div className='mx-5 w-72 '>          
                    <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10 w-9/12 px-5 rounded-md'>
                    <option value={""}>Sub Category</option>
                    {data.map((item)=>
                    <option value={item.subcategory}>{item.subcategory}</option>)}                 
                    </select>

              </div>
              <div className='mx-5 w-72 '>
                  
                    <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10 w-9/12 px-5 rounded-md'>
                    <option value={""}> Category</option>
                    {data.map((item)=><option value= {item.category}>{item.category}  </option>)}                 
                    </select>

              </div>
              <div className=' relative '>
                <input type='text' className='m-5 focus-visible focus-visible:outline-none  mt-2 mr-5 bg-gray-100 border text-md text-black border-gray-300  px- py-2 rounded-md ' placeholder='Search' onChange={(e) => setSearch(e.target.value)}></input>
                <div className='absolute inset-y-0 top-5 left-6' style={{ opacity: '0.5' }}>
                    <IoIosSearch size={20} />
                </div>
              </div>
      </div>          
     
     <div className=' mx-5 mt-10'>
      <DataTable
          columns={columns }     customStyles={customStyles} selectableRows 
          data={filter}  sortIcon= {<PiCaretUpDownFill size={6} style={{ color: 'white' }} />}> 
      </DataTable>
     </div>
   </>
  )
}
export default Sublist
