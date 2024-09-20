import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Columns from '../components/Report/Columns'
import ComData from '../components/Report/ComData'
import { AiOutlineMail } from 'react-icons/ai'
import { BsSliders } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { FaSliders } from 'react-icons/fa6'
import { GoDownload } from 'react-icons/go'
import { IoPrintOutline } from 'react-icons/io5'

const customStyles={
    headCells:{
        style:{
            backgroundColor:'#000000',
            color:'white'
        }
    }
}
const ReportDataTable = () => {
    const [Records,setRecords]=useState('')
    const [selectCompany,SetSelectCompany]=useState('')
    const [selectBranch,setSelectBranch]=useState('')
    const [selectState,SetSelectState]=useState('')
    const [selectActivity,SetSelectActivity]=useState('')
    const [selectCompiled,SetselectCompiled]=useState('')
    const [selectdate,setSelectDate]=useState('')
    const handleFilter=(e)=>{
        setRecords(e.target.value)
    }
    // const filterData=ComData.filter(data=>data.Company_Name.toLowerCase().includes(Records.toLowerCase()));
    const filterData=ComData.filter(item=>{
        const matchCompany= selectCompany ? item.Company_Name===selectCompany:true;
        const matchState= selectState ? item.State===selectState:true;
        const matchBranch= selectBranch ? item.Branch===selectBranch:true;
        const matchActivity= selectActivity ? item.Activity===selectActivity:true;
        const matchCompiled= selectCompiled ? item.Status===selectCompiled:true;
        const matchDate= selectdate ? item.Period===selectdate:true;
        const searchTerm= Records ? item.Branch.toLowerCase().includes(Records.toLowerCase()):true;

        return matchCompany && matchState && matchActivity && matchBranch && matchCompiled && matchDate && searchTerm;
    });
  return (
    <div className='w-screen h-screen px-10 py-5'>
        <div className="flex justify-between ">
            <h1 className='font-bold text-lg'>Compliance Report</h1>
            <div className='flex justify-evenly gap-2'>
                <button className='rounded-full bg-yellow-600 px-2 text-white'><IoPrintOutline size={20}/></button>
                <button className='rounded-full bg-yellow-600 px-2 text-white'><AiOutlineMail size={20}/></button>
                <button className='rounded-full bg-yellow-600 px-2 text-white'><GoDownload size={20}/></button>
            </div>
        </div>
        <div className='flex mt-5 gap-3'>
        <select className='bg-white rounded-lg border border-1 border-gray-500 items-start py-2 text-sm' id="companyselect" name="companyselect" onChange={(e)=>SetSelectCompany(e.target.value)}>
                <option>Company</option>
                {ComData.map(item=><option value={selectCompany}>{item.Company_Name}</option>)}
        </select>
        <select className='bg-white rounded-lg border border-1 border-gray-500 items-start py-2 text-sm' id="stateselect" name="stateselect" onChange={(e)=>SetSelectState(e.target.value)}>
                <option>State</option>
                {ComData.map(item=><option value={selectState}>{item.State}</option>)}
        </select>
        <select className='bg-white rounded-lg border border-1 border-gray-500 items-start py-2 text-sm' id="branchselect" name="branchselect" onChange={(e)=>setSelectBranch(e.target.value)}>
                <option>Branch</option>
                {ComData.map(item=><option value={selectBranch}>{item.Branch}</option>)}
        </select>
        <select className='bg-white rounded-lg border border-1 border-gray-500 items-start py-2 text-sm' id="Activityselect" name="Activityselect" onChange={(e)=>SetSelectActivity(e.target.value)}>
                <option>Activity</option>
                {ComData.map(item=><option value={selectActivity}>{item.Activity}</option>)}
        </select>
        <select className='bg-white rounded-lg border border-1 border-gray-500 items-start py-2 text-sm' id="Compileselect" name="Compileselect" onChange={(e)=>SetselectCompiled(e.target.value)}>
                <option>Compiled</option>
                {ComData.map(item=><option value={selectCompiled}>{item.Status}</option>)}
        </select>
        <input type="date" name="date" id="date" value={selectdate} className='bg-white rounded-lg border border-1 border-gray-500 items-start py-2 text-sm' onChange={(e)=>setSelectDate(e.target.value)} />
        <div className='relative'>
            <input className='bg-white rounded-lg border border-1 border-gray-500  text-sm justify-items-end' placeholder='Search' type="text" id="searchreport" name="searchreport" onChange={handleFilter}/>
            <div className="absolute inset-y-0 left-40 pl-3 flex items-center">
                <CiSearch size={15} />
              </div>
        </div>
        </div>
        <div className='mt-5'>
        <DataTable columns={Columns} data={filterData} selectableRows fixedHeader pagination customStyles={customStyles} ></DataTable>
        </div>
    </div>
  )
}

export default ReportDataTable