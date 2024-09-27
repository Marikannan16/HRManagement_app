import ActionMenu from "./action";
    
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
        cell:(row)=><ActionMenu row={row}/>,
        ignoreClick:true,
        selector: row => row.actions
    }

];

export default columns