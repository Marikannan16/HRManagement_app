import React, {useState} from 'react'
import {HiOutlineDownload } from "react-icons/hi";
import DataTable from 'react-data-table-component';
import { IoIosSearch } from "react-icons/io";
import { PiCaretUpDownFill } from "react-icons/pi";
import columns from './Vcol'
import data from './Vdata'
import dbe from './Viewdata';

const Viewsub = () => {
    const [Data] = useState(data)
    const [search, setSearch] = useState('')
    const filterdata = Data.filter((row) => {
        return (
            row.activity.toLowerCase().includes(search.toLowerCase())
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
    <div> 
         <div className='flex m-2 px-2 justify-between'>
                <h2 className='font-semibold text-lg'> Create Sub Category </h2>
                <div className='flex gap-3'>
                    <button><HiOutlineDownload  onClick={downloadCSV} className='w-9 h-9 p-2 rounded-full mt-1' style={{ backgroundColor: '#D7B95F' }} color='white' /></button>
                    <button className='py-2 w-36 rounded-md text-white' style={{ backgroundColor: '#D7B95F' }}>Sub Category List</button>
                </div>
         </div>  
         <div className='flex justify-items-stretch'>
                <div className='mx-10 w-1/2 '>
                    <h4 className='font-semibold'>Category</h4>
                    <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10 w-9/12 px-5 rounded-md'>
                    <option value={""}> Category</option>
                    {dbe.map((item)=><option value={item.category}>{item.category}</option>)}                 
                    </select>

                </div>
                <div className='mr-10 w-1/2'>
                    <h4 className='font-semibold'>Sub Category</h4>
                    <input type='text' className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300  h-10 w-9/12 px-5 rounded-md' placeholder='Enter The Sub Category'></input>
                </div>
         
          </div>  
          <div className='flex m-5 justify-start -space-x-10' >
                 <div className='mx-5 w-52 '>
                  <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10 w-9/12 px-5 rounded-md'>
                  <option value={""}> Compliance</option>
                  {data.map((item)=><option value= {item.activity}>{item.activity}  </option>)}                 
                  </select>
                  </div>

                  <div className='mx-5 w-52 '>
                  
                  <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10 w-9/12 px-5 rounded-md'>
                  <option value={""}> Type of Act</option>
                  {data.map((item)=><option value= {item.typeofact}>{item.typeofact}  </option>)}                 
                  </select>
                  </div>
                  <div className='mx-5 w-52  '>
                  
                  <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10 w-9/12 px-5 rounded-md'>
                  <option value={""}> Priority</option>
                  {data.map((item)=><option value= {item.priority}>{item.priority}  </option>)}                 
                  </select>
                  </div>

                  <div className='mx-5 w-52  '>
                  
                  <select className=' focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-sm border-gray-300 h-10 w-9/12 px-5 rounded-md'>
                  <option value={""}> Frequency</option>
                  {data.map((item)=><option value= {item.frequency}>{item.frequency}  </option>)}                 
                  </select>
                  </div>

                  <div className=' relative '>
                  <input type='text' className='m-5 focus-visible focus-visible:outline-none  mt-2 mr-5 bg-gray-100 border text-md text-black border-gray-300  px-5 py-2 rounded-md ' placeholder='Search' onChange={(e) => setSearch(e.target.value)} ></input>
                    <div className='absolute inset-y-0 top-5 left-6' style={{ opacity: '0.5' }}>
                      <IoIosSearch size={20} />
                    </div>
                  </div>
            </div>
          

          <div className=' px-5 mx-2'>
            <DataTable 
               columns={columns} customStyles={customStyles} selectableRows 
               data={filterdata} sortIcon= {<PiCaretUpDownFill size={6} style={{ color: 'white' }} />}
            
            ></DataTable>
            </div>
            <div className='flex justify-center mt-10 gap-5'>
                <button className=' rounded-md border border-black py-2 w-36'>Cancel</button>
                <button className='py-2 w-36 rounded-md text-white' style={{ backgroundColor: '#D7B95F' }}>Edit</button>
            </div>
             


      
    </div>
  )
}

export default Viewsub
