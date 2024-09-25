// import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import ActionCell from "./actions.jsx"

const columns = [
{  
    name: 'SNO',
    selector: (row) => row.sno,
    sortable: true,
},
{
    name: 'Activity',
    selector: (row) => row.activity,
    sortable: true,
},
{
    name: 'Name of the Form',
    selector: (row) => row.formname,
    sortable: true,
},
{
    name: 'Applicable Law',
    selector: (row) => row.applicablelaw,
    sortable: true,
},
{
    name: 'Type of Act',
    selector: (row) => row.acttype,
    sortable: true,
},
{
    name: 'Due Date',
    selector: (row) => row.duedate,
    sortable: true,
},
{
    name: 'Period',
    selector: (row) => row.period,
    sortable: true,
},
{
    name: 'Section',
    selector: (row) => row.section,
    sortable: true,
},
{
    name: 'Priority',
    selector: (row) => row.priority,
    sortable: true,
},
{
    name: 'Action',
    cell: (row) => <ActionCell row={row} />, // Use the ActionCell component here
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  
}];

export default columns;
