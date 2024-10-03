import React, { useState } from 'react'
import {CompanyColumns} from '../../Components/reports/CompanyColumns'
import CompanyData from '../../Components/reports/CompanyDatas'
import DataTable from 'react-data-table-component'
import { GoDownload } from 'react-icons/go'
import { IoMailOutline, IoPrintOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'

const CompanywiseReport = () => {
  const[tableData,setTableData]=useState(CompanyData)
  const [search,setSearch]=useState("")
  const [filter,setFilter]=useState({Company_Name:"",State:"",Branch:"",Activity:"",Form_name:"",Acts:"",ActType:"",state:"",Filed_Date:"",Period:"",Document:"",priority:"",Status:""})
  const filterData=tableData.filter((item)=>{
    return (
      (filter.Company_Name ? item.Company_Name===filter.Company_Name:true)&&(filter.State ? item.State===filter.State:true)&&(filter.Branch ? item.Branch===filter.Branch:true)&&(filter.Activity ? item.Activity===filter.Activity:true)&&(filter.Status ? item.Status===filter.Status:true)&&(filter.Filed_Date? item.Filed_Date==filter.Filed_Date:true)&&
      (item.Company_Name.toLowerCase().includes(search.toLowerCase())||item.Branch.toLowerCase().includes(search.toLowerCase())||item.State.toLowerCase().includes(search.toLowerCase())||item.Activity.toLowerCase().includes(search.toLowerCase())||item.Form_name.toLowerCase().includes(search.toLowerCase())||item.Acts.toLowerCase().includes(search.toLowerCase())||item.ActType.toLowerCase().includes(search.toLowerCase())||item.state.toLowerCase().includes(search.toLowerCase())||item.Filed_Date.toLowerCase().includes(search.toLowerCase())||item.Period.toLowerCase().includes(search.toLowerCase())||item.Document.toLowerCase().includes(search.toLowerCase())||item.Priority.toLowerCase().includes(search.toLowerCase())||item.Status.toLowerCase().includes(search.toLowerCase()))
    );
  });
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
  const customStyles={
    headCells:{
      style:{
          backgroundColor:'#000000',
          color:'white',
      }
  }
  } 

  return (
    <div className='w-screen h-screen px-10 py-5 '>
      <div className="flex justify-between ">
            <h1 className='font-bold text-lg mt-3 ms-3'>Company Wise Report ({filterData.length})</h1>
            <div className='flex justify-evenly gap-2 me-5 p-3'>
                <button className='rounded-full bg-yellow-600 h-8 w-8 text-white '><IoPrintOutline size={17} className='ms-2' /></button>    
                <button className='rounded-full bg-yellow-600 h-8 w-8 text-white '><IoMailOutline size={17} className='ms-2' /></button>    
                <button className='rounded-full bg-yellow-600 h-8 w-8 text-white ' onClick={()=>downloadCSV(filterData)}><GoDownload size={17} className='ms-2'/></button>    
            </div>
      </div>
      <div className='flex-row  gap-3 xl:flex  mt-5 justify-start mb-3'>
        <div>
        <select onChange={(e)=>setFilter({...filter,Company_Name:e.target.value})} value={filter.Company_Name} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start w-11/12 xl:w-auto mt-2'>
          <option value="">Company</option>
          {CompanyData.map((d)=><option key={d.Sno} value={d.Company_Name}>{d.Company_Name}</option>)}
        </select>
        </div>
        <div>
        <select onChange={(e)=>setFilter({...filter,State:e.target.value})} value={filter.State} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start w-11/12 xl:w-auto mt-2'>
          <option value="">State</option>
          {CompanyData.map((d)=><option value={d.State}>{d.State}</option>)}
        </select>
        </div>
        <div>
        <select onChange={(e)=>setFilter({...filter,Branch:e.target.value})} value={filter.Branch} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start w-11/12 xl:w-auto mt-2'>
          <option value="">Company</option>
          {CompanyData.map((d)=><option value={d.Branch}>{d.Branch}</option>)}
        </select>
        </div>
        <div>
        <select onChange={(e)=>setFilter({...filter,Activity:e.target.value})} value={filter.Activity} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start w-11/12 xl:w-auto mt-2'>
          <option value="">Activity</option>
          {CompanyData.map((d)=><option value={d.Activity}>{d.Activity}</option>)}
        </select>
        </div>
        <div>
        <select onChange={(e)=>setFilter({...filter,Status:e.target.value})} value={filter.Status} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 pe-5 pl-3 text-start w-11/12 xl:w-auto mt-2'>
          <option value="">Status</option>
          {CompanyData.map((d)=><option value={d.Status}>{d.Status}</option>)}
        </select>
        </div>
        <div className='relative'>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='bg-white rounded-lg border border-1 border-gray-500  w-11/12 xl:w-auto mt-2 justify-items-end px-2 h-9' placeholder='Search'/>
        <div className="absolute inset-y-0 right-12 xl:right-2 flex items-center ">
                <CiSearch size={15} className='mt-1.5'/>
              </div>
        </div>
        <input type="date" value={filter.Filed_Date} onChange={(e)=>setFilter({...filter,Filed_Date:e.target.value})} className='bg-white rounded-lg border border-1 border-gray-500 text-sm justify-items-end px-2 h-9 w-11/12 xl:w-auto mt-2'/>
      </div>
      <DataTable columns={CompanyColumns} data={filterData} pagination selectableRows highlightOnHover customStyles={customStyles} className='table-auto'/>  <br/><br/>
    </div>
  )
}

export default CompanywiseReport
