import React, { useEffect, useState } from 'react'
import { CiBoxList, CiGrid41, CiSearch } from 'react-icons/ci'
import { GoDownload, GoPencil } from 'react-icons/go'
import {MdAdd} from "react-icons/md"
import spider from '../assets/spider.jpg'
import logo from '../assets/spiderlogo.png'
import thomas from '../assets/thomas.jpeg'
import iron from '../assets/iron.jpeg'
import { IoNotificationsOffOutline, IoTrashOutline } from 'react-icons/io5'
import { AiOutlineFileSearch, AiOutlineMail } from 'react-icons/ai'
const ClientManagement = () => {
    
        
    const Clients=[
        {
            company:"ace catering equipment",
            branches:"5",
            logo:{logo},
            level:"high"
        },
        {
            company:"Acme corporation",
            branches:"100",
            logo:{spider},
            level:"high"
        },
        {
            company:"saylent corp",
            branches:"20",
            logo:{thomas},
            level:"low"
        },
        {
            company:"initech",
            branches:"10",
            logo:{iron},
            level:"medium"
        },
    ]

    const [Data, setData] = useState(Clients)
    const [search,setSearch]=useState('')
    const [filter,setFilter]=useState({company:"",branches:"",level:""})
    const [filterData,setfilterData]=useState(Data)
    const[view,setView]=useState(3)
    useEffect(() => {
    const filtered = Data.filter((data) => {
        return (
            (filter.company ? data.company === filter.company : true) &&
            (data.company.toLowerCase().includes(search.toLowerCase()) ||
            data.branches.toLowerCase().includes(search.toLowerCase()) ||
            data.level.toLowerCase().includes(search.toLowerCase()))
        );
    });
    setfilterData(filtered);
}, [Data, filter, search]);
  return (
    <div className='w-screen h-screen'>
        <div className="flex justify-between">
            <h1 className='font-bold text-lg mt-3 ms-4'>Company Wise Report({Data.length})</h1>
            <div className='flex justify-evenly gap-3 me-5 p-3'>    
                <button className='rounded-full bg-yellow-600 text-white p-2.5' onClick={()=>window.print()}><GoDownload size={15} /></button>
                <button className='relative rounded-md bg-yellow-600 text-white px-10 py-2 '>Add Client<MdAdd className='absolute left-4 bottom-3' size={15}/></button>    
            </div>
      </div>

      <div className='flex my-3 justify-between gap-3 p-2 ms-3 items-center'>
        <div className='flex items-center gap-3'>
          <select className='bg-white rounded-lg border border-1 border-gray-500 py-2 ps-3 pe-20' value={filter.company} onChange={(e)=>setFilter({...filter,company:e.target.value})}>
            <option value="">Company</option>
            {Data.map((item)=><option value={item.company}>{item.company}</option>)}
          </select>
          <div className='relative'>
            <input type="text" className='bg-white rounded-lg border border-1 border-gray-500  text-sm justify-items-end ps-12 py-2.5' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <div className="absolute inset-y-0 left-1 pl-3 flex items-center">
                <CiSearch size={20} />
            </div>
          </div>
        </div>
        <div className='flex items-start gap-2 me-16'>
            <button onClick={(e)=>setView(3)} className={`${view ===3 ? 'bg-black text-white': 'bg-white text-black'} p-2.5 border-1 border-gray-400 rounded-md `}><CiGrid41 size={17}/></button>
            <button onClick={(e)=>setView(1)}className={`${view ===1 ? 'bg-black text-white': 'bg-white text-black'} p-2.5 border-1 border-gray-400 rounded-md `}><CiBoxList size={17}/></button>
        </div>
    </div>
    <div className='mx-4'>
    <div className={`grid grid-cols-${view} items-center gap-2` }>
    {filterData.map((data)=>
        <div className='relative py-8 px-10 rounded-md bg-white border border-gray-400'>

            <div className='flex'>
                <img src={logo} className='rounded-full h-16 w-16'/>
                <h5 className='font-semibold ms-3 '>{data.company}</h5>
                
            </div>
            <p className='text-start ms-20'>Branches - {data.branches}</p>
            <hr/>
            <div className='flex gap-3'>
                <button className='p-2.5 bg-yellow-300 text-white rounded-full'><IoNotificationsOffOutline/></button>
                <button className='p-2.5 bg-yellow-300 text-white rounded-full'><AiOutlineMail/></button>
                <button className='p-2.5 bg-yellow-300 text-white rounded-full'><GoPencil/></button>
                <button className='p-2.5 bg-yellow-300 text-white rounded-full'><IoTrashOutline/></button>
                <button className='p-2.5 bg-yellow-300 text-white rounded-full'><AiOutlineFileSearch/></button>
            </div>
            
        </div>
    )}
        </div>
    </div>
    </div>
  )
}

export default ClientManagement