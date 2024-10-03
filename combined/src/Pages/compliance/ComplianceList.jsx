import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Data from '../../Components/compliance list/data'
import {columns} from '../../Components/compliance list/Columns'
import { CiSearch } from 'react-icons/ci'
import { GoDownload } from 'react-icons/go'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const ComplianceList = () => {
const[tableData,setTableData]=useState(Data)
const [search,setSearch]=useState("")
  const [filter,setFilter]=useState({activity:"",formname:"",applicablelaw:"",acttype:"",priority:"",frequency:""})
  const filterData=tableData.filter((item)=>{
    return (
      (filter.activity ? item.activity===filter.activity:true)&& 
      (filter.formname ? item.formname===filter.formname:true)&&
      (filter.applicablelaw ? item.applicablelaw===filter.applicablelaw:true)&&
      (filter.acttype ? item.acttype===filter.acttype:true)&&
      (filter.priority ? item.priority===filter.priority:true)&&
      (filter.frequency ? item.period===filter.frequency:true)&&(
      item.activity.toLowerCase().includes(search.toLowerCase())||
      item.formname.toLowerCase().includes(search.toLowerCase())||
      item.applicablelaw.toLowerCase().includes(search.toLowerCase())||
      item.acttype.toLowerCase().includes(search.toLowerCase())||
      item.priority.toLowerCase().includes(search.toLowerCase())||
      item.period .toLowerCase().includes(search.toLowerCase()))
    );
  });
  const customStyles={
    headCells:{
      style:{
          backgroundColor:'#000000',
          color:'white',
      }
  }
  } 
  const downloadCSV=(data)=>{
    const csv=data.map(row=>Object.values(row).join(',')).join('\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
    const link=document.createElement('a');
    link.href=URL.createObjectURL(blob);
    link.setAttribute('download','data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className='w-screen h-screen px-5 py-5 '>
      <div className="flex justify-between ">
            <h1 className='font-bold text-lg'>Compliance List({filterData.length})</h1>
            <div className='flex justify-evenly gap-2 me-5'>
                <button className='rounded-full bg-yellow-600 h-9 w-9 text-white mt-0.5'><GoDownload size={15} className='ms-2.5' onClick={()=>downloadCSV(filterData)}/></button>
               <Link to="/compliance"><button className='rounded-md bg-yellow-600 h-10 w-40 text-white text-center text-sm flex gap-2 pt-2.5 ps-1'><FaPlus className='text-white mt-1.5 ms-3' size={10} />Add Compliance</button> </Link>
            </div>
      </div>
      <div className='flex-row  gap-3 xl:flex  mt-5 justify-start'>
        <div>
        <select onChange={(e)=>setFilter({...filter,activity:e.target.value})} value={filter.activity} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-1 text-start w-11/12 xl:w-full mt-2'>
          <option value="">Activity</option>
          {Data.map((d)=><option value={d.activity}>{d.activity}</option>)}
        </select></div>
        <div>
        <select onChange={(e)=>setFilter({...filter,formname:e.target.value})} value={filter.formname} className='bg-white rounded-lg border border-1 border-gray-500  text-sm px-1 py-1.5 text-start w-11/12 xl:w-full mt-2'>
          <option value="">Form Type</option>
          {Data.map((d)=><option value={decodeURIComponent.formname}>{d.formname}</option>)}
        </select></div>
        <div>
        <select onChange={(e)=>setFilter({...filter,applicablelaw:e.target.value})} value={filter.applicablelaw} className='bg-white rounded-lg border border-1 border-gray-500  text-sm px-1 py-1.5 text-start w-11/12 xl:w-full mt-2'>
          <option value="">Type of act</option>
          {Data.map((d)=><option value={d.applicablelaw}>{d.applicablelaw}</option>)}
        </select></div>
        <div>
        <select onChange={(e)=>setFilter({...filter,priority:e.target.value})} value={filter.priority} className='bg-white rounded-lg border border-1 border-gray-500  text-sm px-1 py-1.5 text-start w-11/12 xl:w-full mt-2'>
          <option value="">Priority</option>
          {Data.map((d)=><option value={d.priority}>{d.priority}</option>)}
        </select></div>
        <div>
        <select onChange={(e)=>setFilter({...filter,frequency:e.target.value})} value={filter.frequency} className='bg-white rounded-lg border border-1 border-gray-500  text-sm px-1 py-1.5 text-start w-11/12 xl:w-full mt-2'>
          <option value="">Frequency</option>
          {Data.map((d)=><option value={d.period}>{d.period}</option>)}
        </select></div>
        <div className='relative'>
            <input className='bg-white rounded-lg border border-1 border-gray-500  text-sm justify-items-end h-8 px-2 w-11/12 xl:w-full mt-2' placeholder='Search' type="text" id="searchreport" name="searchreport" onChange={(e)=>setSearch(e.target.value)} value={search}/>
            <div className="absolute inset-y-0 right-12 xl:right-2 flex items-center ">
                <CiSearch size={18} className='mt-2.5 xl:mt-1' />
              </div>
        </div>
      </div>
      <br/>
      <div className='overflow-x-auto'>
      <DataTable columns={columns} data={filterData} pagination selectableRows fixedHeader responsive highlightOnHover customStyles={customStyles} className='table-auto -z-50'/>  <br/><br/>
      </div>
      <div className='flex  justify-center'>
        <div><button className='rounded-md bg-white p-2 text-black text-sm px-8 border border-1 border-black me-4'>Cancel</button><button className='rounded-md bg-yellow-600 p-2 text-white text-sm px-8 ms-2'>Save</button></div>
      </div>
    </div>
  );
}

export default ComplianceList;