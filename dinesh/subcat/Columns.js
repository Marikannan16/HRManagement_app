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
        selector: row => row.actions
    }
];
export default columns;