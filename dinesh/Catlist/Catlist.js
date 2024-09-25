import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";
import React, { useState } from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import DataTable from 'react-data-table-component';
import { PiCaretUpDownFill } from "react-icons/pi";
import data from './Datas';
import columns from './Columns';

const Catlist = () => {
    const [Data] = useState(data)
    const [search, setSearch] = useState('')
    const filterData = Data.filter((row) => {
        return (
            row.category.toLowerCase().includes(search.toLowerCase())
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
    // const downloadCSV = (data) => {
    //     const csv = data.map(row => Object.values(row).join(',')).join('\n');
    //     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    //     const link = document.createElement('a');
    //     link.href = URL.createObjectURL(blob);
    //     link.setAttribute('download', 'Factory.csv');
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    return (
        <>
            <div className='flex m-5 justify-between'>
                <h2 className='font-semibold text-lg'>Category List</h2>
                <div className='flex gap-3'>
                    <button><HiOutlineDownload className='w-9 h-9 p-2 rounded-full mt-1' style={{ backgroundColor: '#D7B95F' }} color='white' /></button>

                    <button className='py-2 w-36 rounded-md text-white' style={{ backgroundColor: '#D7B95F' }}>Create Category</button>
                </div>
            </div>


            <div className='relative'>
                <input type='text' className='m-5 focus-visible focus-visible:outline-none  mt-2 bg-gray-100 border text-md text-black border-gray-300  px-7 py-2 rounded-md ' placeholder='Search' onChange={(e) => setSearch(e.target.value)} ></input>

                <div className='absolute inset-y-0 top-5 left-6' style={{ opacity: '0.5' }}>
                    <IoIosSearch size={20} />
                </div>
            </div>

            <div className='mx-4'>
                <DataTable 
                    columns={columns} customStyles={customStyles} selectableRows
                    data={filterData} sortIcon={<PiCaretUpDownFill style={{ color: 'white' }} />}>
                </DataTable>
                <div className="flex flex-col items-start justify-center shadow-md bg-gray-200 w-24 p-2 rounded absolute top-52 right-72 hover:bg-gray-300">
                    <div className="flex items-center justify-start gap-2 ">
                        <HiOutlinePencil/>
                        Edit
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <RiDeleteBinLine />
                        Delete
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <FiEye />
                        View
                    </div>
                </div>



                {/* <div className="flex flex-col items-start justify-center shadow-md bg-gray-200 w-24 p-2 rounded absolute top-0 right-0">
                    <div className="flex items-center justify-start gap-2">
                        <HiOutlinePencil />
                        Edit
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <RiDeleteBinLine />
                        Delete
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <FiEye />
                        View
                    </div>
                </div> */}
            </div>






        </>
    )
}

export default Catlist
