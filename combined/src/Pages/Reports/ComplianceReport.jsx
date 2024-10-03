import React, { useState } from 'react' 
import { ComplianceColumns } from '../../Components/reports components/ComplianceColumns'
import { ComplianceData } from '../../Components/reports components/ComplianceDatas'
import DataTable from 'react-data-table-component'
import { GoDownload } from 'react-icons/go'
import { IoMailOutline, IoPrintOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import { RiExpandUpDownFill } from 'react-icons/ri'
import CompanyData from '../../Components/reports components/CompanyDatas'

const ComplianceReport = () => {
const[tableData,setTableData]=useState(ComplianceData)
const [search,setSearch]=useState("")
const [filter,setFilter]=useState({Company_Name:"",Branch:"",Activity:"",Form_name:"",Acts:"",ActType:"",state:"",Filed_Date:"",Period:"",Document:"",priority:"",Status:""})
const filterData=tableData.filter((item)=>{
    return (
      (filter.Company_Name ? item.Company_Name===filter.Company_Name:true)&&(filter.Branch ? item.Branch===filter.Branch:true)&&(filter.Activity ? item.Activity===filter.Activity:true)&&(filter.Status ? item.Status===filter.Status:true)&&(filter.Filed_Date? item.Filed_Date==filter.Filed_Date:true)&&
      (item.Company_Name.toLowerCase().includes(search.toLowerCase())||item.Branch.toLowerCase().includes(search.toLowerCase())||item.Activity.toLowerCase().includes(search.toLowerCase())||item.Form_name.toLowerCase().includes(search.toLowerCase())||item.Acts.toLowerCase().includes(search.toLowerCase())||item.ActType.toLowerCase().includes(search.toLowerCase())||item.state.toLowerCase().includes(search.toLowerCase())||item.Filed_Date.toLowerCase().includes(search.toLowerCase())||item.Period.toLowerCase().includes(search.toLowerCase())||item.Document.toLowerCase().includes(search.toLowerCase())||item.Priority.toLowerCase().includes(search.toLowerCase())||item.Status.toLowerCase().includes(search.toLowerCase()))
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
    <div>
      <div className='w-auto h-screen py-3 '>
      <div className="flex justify-between ">
            <h1 className='font-bold text-lg  ms-3 mt-4'>Compliance Report ({filterData.length})</h1>
            <div className='flex justify-around gap-2 me-5 p-3'>
                <button className='rounded-full bg-yellow-600 w-9 h-9 text-white' onClick={()=>{window.print()}}><IoPrintOutline size={17} className='ms-2.5' /></button>    
                <button className='rounded-full bg-yellow-600 w-9 h-9 text-white'><IoMailOutline size={17} className='ms-2.5'/></button>    
                <button className='rounded-full bg-yellow-600 w-9 h-9 text-white' onClick={()=>downloadCSV(filterData)}><GoDownload size={17} className='ms-2.5' /></button>    
            </div>
      </div>
      <div className='flex-row  gap-3 xl:flex xl:justify-start mb-6 mt-5 ms-5'>
        <div>
        <select onChange={(e)=>setFilter({...filter,Company_Name:e.target.value})} value={filter.Company_Name} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start text-sm w-11/12 xl:w-auto mt-2'>
          <option value="">Company</option>
          {CompanyData.map((d)=><option key={d.Sno} value={d.Company_Name}>{d.Company_Name}</option>)}
        </select>
        </div>
        <div>
        <select onChange={(e)=>setFilter({...filter,Branch:e.target.value})} value={filter.Branch} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start text-sm w-11/12 xl:w-auto mt-2'>
          <option value="">Branch</option>
          {CompanyData.map((d)=><option value={d.Branch}>{d.Branch}</option>)}
        </select>
        </div>
        <div>
        <select onChange={(e)=>setFilter({...filter,Activity:e.target.value})} value={filter.Activity} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-3 text-start text-sm w-11/12 xl:w-auto mt-2'>
          <option value="">Activity</option>
          {CompanyData.map((d)=><option value={d.Activity}>{d.Activity}</option>)}
        </select>
        </div>
        <div>
        <select onChange={(e)=>setFilter({...filter,Status:e.target.value})} value={filter.Status} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 ps-3 text-start text-sm w-11/12 xl:w-auto mt-2'>
          <option value="">Status</option>
          {CompanyData.map((d)=><option value={d.Status}>{d.Status}</option>)}
        </select>
        </div>
        <div className='relative'>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='bg-white rounded-lg border border-1 border-gray-500  text-sm justify-items-end px-2 h-8 w-11/12 xl:w-auto mt-2' placeholder='Search'/>
        <div className="absolute inset-y-0 right-12 xl:right-4 pl-3 flex items-center">
                <CiSearch size={15} />
              </div>
        </div>
        <input type="date" value={filter.Filed_Date} onChange={(e)=>setFilter({...filter,Filed_Date:e.target.value})} className='bg-white rounded-lg border border-1 border-gray-500  text-sm justify-items-end px-2 h-8 w-11/12 xl:w-auto mt-2'/>
      </div>
      <div className='w-auto'>
      <DataTable columns={ComplianceColumns} data={filterData} pagination fixedHeader responsive fixedHeaderScrollHeight='450px' selectableRows highlightOnHover customStyles={customStyles} sortIcon={<RiExpandUpDownFill/>} className='table-auto'/>  <br/><br/>
      </div>
    </div>
    </div>
  )
}

export default ComplianceReport