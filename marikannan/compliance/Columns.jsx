import { SlOptions } from "react-icons/sl";
import Button from './Button'
export const columns=[{
    name:'SNO',
    selector:(row)=>row.sno,
    sortable:true,
    width:'70px'
},
{
    name:'Activity',
    selector:(row)=>row.activity,
    sortable:true,
    width:'120px'
},
{
    name:'Name of the Form',
    selector:(row)=>row.formname,
    sortable:true,
    width:'170px'
},
{
    name:'Applicable Law',
    selector:(row)=>row.applicablelaw,
    sortable:true,
    width:'300px'
},
{
    name:'Type of Act',
    selector:(row)=>row.acttype,
    sortable:true,
    width:'110px'
} ,
{
    name:'Due Date',
    selector:(row)=>row.duedate,
    sortable:true,
    width:'100px'
},
{
    name:'Period',
    selector:(row)=>row.period,
    sortable:true,
    width:'80px'
},
{
    name:'Section',
    selector:(row)=>row.section,
    sortable:true,
    width:'130px'
},
{
    name:'Priority',
    selector:(row)=>row.priority,
    sortable:true,
    width:'90px'
},
{
    name: 'actions',
    cell:(row)=>(<Menu/>),
    ignoreRowClick:true,
    allowOverflow:true,
    button:true,
    width:'65px'
},

]

import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

const Menu = () => {
    const[open,setOpen]=useState(false)
    const toggleClick=()=>{
        setOpen(!open)
    }
    const handleItemClick=(item)=>{
        alert(`your clicked ${item}`)
        setOpen(false)
    }

  return (
    <div>
        <div className="relative inline-block">
            <div>
                <button onClick={toggleClick}><SlOptions/></button>
                {open && (
                    <div className="absolute bg-white right-0 -top-20 z-10 mt-2 w-28 rounded-md ring-1 ring-black ring-opacity-5">
                        <a onClick={()=>handleItemClick('view')} className="flex gap-3 px-2.5 py-2 text-md text-black hover:bg-gray-300"><FaRegEye className="mt-0.5"/> View</a>
                        <a onClick={()=>handleItemClick('edit')} className="flex gap-3 px-2.5 py-2 text-md text-black hover:bg-gray-300"><MdEdit className="mt-0.5"/> Edit</a>
                        <a onClick={()=>handleItemClick('delete')} className="flex gap-3 px-2.5 py-2 text-md text-black hover:bg-gray-300"><MdDeleteOutline className="mt-0.5"/> Delete</a>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Menu