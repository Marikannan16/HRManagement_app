import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Data from './Dummy'
import columns from './Columns'
import { CiSearch } from 'react-icons/ci'

const DataTable = () => {
const[tableData,setTableData]=useState(Data)
  const [filter,setFilter]=useState({activity:"",formname:"",applicablelaw:"",acttype:"",priority:"",frequency:"",searchterm:""})
  const filterData=tableData.filter((item)=>{
    return (
      (filter.activity ? item.activity===filter.activity:true)&&
      (filter.formname ? item.formname===filter.formname:true)&&
      (filter.applicablelaw ? item.applicablelaw===filter.applicablelaw:true)&&
      (filter.acttype ? item.acttype===filter.acttype:true)&&
      (filter.priority ? item.priority===filter.priority:true)&&
      (filter.frequency ? item.period===filter.frequency:true)&&
      (filter.searchterm ? item.formname.toLowerCase().includes(filter.searchterm.toLowerCase()):true)
    );
  }); 
  return (
    <div className='w-screen h-screen px-10 py-5 '>
      <h5>hello</h5>
    </div>
  );
}

export default DataTable;