import { RiNeteaseCloudMusicLine } from "react-icons/ri";

const Columns=[
    {
        name:"S.No",
        selector:row=>row.S_No,
        sortable:true
    },
    {
        name:"Company Name",
        selector:row=>row.Company_Name,
        sortable:true
    },
    {
        name:"State",
        selector:row=>row.State,
        sortable:true
    },
    {
        name:"Branch",
        selector:row=>row.Branch,
        sortable:true
    },
    {
        name:"Activity",
        selector:row=>row.Activity,
        sortable:true
    },
    {
        name:"Name of the Form",
        selector:row=>row.Form_name,
        sortable:true
    },
    {
        name:"Applicable Labour Act",
        selector:row=>row.Acts,
        sortable:true
    },
    {
        name:"Type of  Act",
        selector:row=>row.ActType,
        sortable:true
    },
    {
        name:"state",
        selector:row=>row.state,
        sortable:true
    },
    {
        name:"Fild Date",
        selector:row=>row.Filed_Date,
        sortable:true
    },
    {
        name:"Period",
        selector:row=>row.Period,
        sortable:true
    },
    {
        name:"Document",
        selector:row=>row.Document,
        sortable:true
    },
    {
        name:"Priority",
        selector:row=>row.Priority,
        sortable:true
    },
    {
        name:"Status",
        selector:row=>row.Status,
        sortable:true
    },
    {
        name:"Action",
        selector:row=>row.Action,
        sortable:true
    }


]

export default Columns;
