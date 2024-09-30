import ActionMenu from "./Vaction";
const columns =[
   
    {
      name:'S NO',
      selector: row=>row.sno,
      sortable:true
    },
    {
      name:'Activity',
      selector: row=>row.activity,
      sortable:true
    },
    {
      name:'Applicable Labour Act',
      selector: row=>row.applicablelabouract,
      sortable:true
    },
    {
        name:'Type of Act',
        selector: row=>row.typeofact,
        sortable:true
    },
    {
        name:'Frequency',
        selector: row=>row.frequency,
        sortable:true
    },
    {
        name:'Priority',
        selector: row=>row.priority,
        sortable:true
    },
    {
      name:'Actions',
      cell:(row)=><ActionMenu row={row}/>,
      ignoreClick:true,
      selector: row=>row.actions,
      sortable:true
    },
  ];
  export default columns;
