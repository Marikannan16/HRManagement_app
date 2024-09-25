import { HiDotsVertical } from "react-icons/hi";

const columns = [
    {
        name: 'S NO',
        selector: row => row.sno,
        sortable: true
    },
    {
        name: 'Category',
        selector: row => row.category,
        sortable: true
    },
    {
        name: 'Actions',
        cell:(row)=><button>< HiDotsVertical className="m-3 "/></button>,
        ignoreClick:true,
        selector: row => row.actions
    }

];
export default columns;