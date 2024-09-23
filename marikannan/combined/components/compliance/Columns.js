import { SlOptions } from "react-icons/sl";

const columns=[{
    name:'SNO',
    selector:(row)=>row.sno,
    sortable:true,
},
{
    name:'Activity',
    selector:(row)=>row.activity,
    sortable:true,
},
{
    name:'Name of the Form',
    selector:(row)=>row.formname,
    sortable:true,
},
{
    name:'Applicable Law',
    selector:(row)=>row.applicablelaw,
    sortable:true,
},
{
    name:'Type of Act',
    selector:(row)=>row.acttype,
    sortable:true,
} ,
{
    name:'Due Date',
    selector:(row)=>row.duedate,
    sortable:true,
},
{
    name:'Period',
    selector:(row)=>row.period,
    sortable:true,
},
{
    name:'Section',
    selector:(row)=>row.section,
    sortable:true,
},
{
    name:'Priority',
    selector:(row)=>row.priority,
    sortable:true,
},
{
    name:'actions',
    cell:(row)=><button><SlOptions/></button>,
    ignoreClick:true,
    selector:(row)=>row.actions
}

]
export default columns;
