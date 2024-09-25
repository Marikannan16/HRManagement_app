import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Data from './Dummy'
import columns from './Columns'
import { CiSearch } from 'react-icons/ci'
import { GoDownload } from 'react-icons/go'
import { FaPlus } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { setPagination } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Compliancelist = () => {
    const [tableData, setTableData] = useState(Data)
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const dispatch = useDispatch()
    const [filter, setFilter] = useState({ activity: "", formname: "", applicablelaw: "", acttype: "", priority: "", frequency: "", searchterm: "" })
   
    const filterData = tableData.filter((item) => {
        const isActivityMatch = filter.activity ? item.activity === filter.activity : true;
        const isFormNameMatch = filter.formname ? item.formname === filter.formname : true;
        const isApplicableLawMatch = filter.applicablelaw ? item.applicablelaw === filter.applicablelaw : true;
        const isActTypeMatch = filter.acttype ? item.acttype === filter.acttype : true;
        const isPriorityMatch = filter.priority ? item.priority === filter.priority : true;
        const isFrequencyMatch = filter.period ? item.period === filter.period : true;
        const isDueDateMatch = filter.duedate ? item.duedate === filter.duedate : true;
        const isSectionMatch = filter.section ? item.section === filter.section : true;

    
        const isSearchTermMatch = filter.searchterm
            ? [
                item.formname,
                item.activity,
                item.applicablelaw,
                item.priority,
                item.acttype,
                item.period,
                item.section,
                item.duedate
              ].some(field => field && field.toLowerCase().includes(filter.searchterm.toLowerCase()))
            : true;
    
        return (
            isActivityMatch &&
            isFormNameMatch &&
            isApplicableLawMatch &&
            isActTypeMatch &&
            isPriorityMatch &&
            isFrequencyMatch &&
            isDueDateMatch &&
            isSectionMatch &&
            isSearchTermMatch 
        );
    });
    
    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#000000',
                color: 'white',
            }
        }
    }


    const indexOfLastRecord = activePage * rowsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - rowsPerPage;
    const currentData = filterData.slice(indexOfFirstRecord, indexOfLastRecord);
    // const totalPages = Math.ceil(filterData.length / rowsPerPage);


    const handleGoToCompliance = () => {
        navigate('/home/compliance');  // Navigate to compliance page
    };
    const { complianceList = [], filters = {}, pagination = {} } = useSelector((state) => state.compliance);

    const handlePageClick = (page) => {
        setActivePage(page);
        handlePageChange(page); // Update pagination in Redux
    };
    const handlePageChange = (page) => {
        dispatch(setPagination({ ...pagination, currentPage: page }));
    };
    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setActivePage(1); // Reset to first page on rows per page change
    };

    const downloadCSV = (data) => {
        const csv = data.map(row => Object.values(row).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className='w-screen h-screen px-10 py-5 '>
            <div className="flex justify-between ">
                <h1 className='font-bold text-lg'>Compliance List</h1>
                <div className='flex justify-evenly gap-2 me-5'>

                    <button className='rounded-full bg-yellow-600 px-3 text-white' onClick={() => downloadCSV(filterData)}><GoDownload size={15} /></button>
                    <div className='relative'><button className='rounded-md bg-yellow-600 p-2 text-white text-sm px-8 '
                        onClick={() => handleGoToCompliance()}> Add Compliance</button><div className="absolute inset-y-0 left-px pl-3 flex items-center">
                            <FaPlus className='text-white' size={10} />

                        </div>
                    </div>

                </div>
            </div>
            <div className='flex mt-5 justify-start gap-3'>
                <select onChange={(e) => setFilter({ ...filter, activity: e.target.value })} value={filter.activity} className='bg-white rounded-lg border border-1 border-gray-500 py-1.5 px-1 text-start text-sm'>
                    <option value="">Compliance</option>
                    {Data.map((d) => <option value={d.activity}>{d.activity}</option>)}
                </select>
                <select onChange={(e) => setFilter({ ...filter, formname: e.target.value })} value={filter.formname} className='bg-white rounded-lg border border-1 border-gray-500  text-sm px-1 py-1.5 text-start'>
                    <option value="">Form Type</option>
                    {Data.map((d) => <option value={decodeURIComponent.formname}>{d.formname}</option>)}
                </select>
                <select onChange={(e) => setFilter({ ...filter, applicablelaw: e.target.value })} value={filter.applicablelaw} className='bg-white rounded-lg border border-1 border-gray-500  text-sm px-1 py-px text-start'>
                    <option value="">Type of act</option>
                    {Data.map((d) => <option value={d.applicablelaw}>{d.applicablelaw}</option>)}
                </select>
                <select onChange={(e) => setFilter({ ...filter, priority: e.target.value })} value={filter.priority} className='bg-white rounded-lg border border-1 border-gray-500  text-sm px-1 py-1.5 text-start'>
                    <option value="">Priority</option>
                    {Data.map((d) => <option value={d.priority}>{d.priority}</option>)}
                </select>
                <select onChange={(e) => setFilter({ ...filter, period: e.target.value })} value={filter.period} className='bg-white rounded-lg border border-1 border-gray-500  text-sm px-1 py-1.5 text-start'>
                    <option value="">Frequency</option>
                    {Data.map((d) => <option value={d.period}>{d.period}</option>)}
                </select>
                <div className='relative'>
                    <input className='bg-white rounded-lg border border-1 border-gray-500  text-sm justify-items-end py-1 px-2' placeholder='Search' type="text" id="searchreport" name="searchreport" onChange={(e) => setFilter({ ...filter, searchterm: e.target.value })} />
                    <div className="absolute inset-y-0 right-2 pl-3 flex items-center">
                        <CiSearch size={15} />
                    </div>
                </div>
                <div className='justify-center'>
                    <FontAwesomeIcon icon={faSlidersH} size="lg" />
                </div>
            </div>
            <br />


            <DataTable columns={columns} data={currentData} highlightOnHover selectableRows rowsPerPage customStyles={customStyles} className='table' />  <br /><br />

            <nav aria-label="Page navigation example">
                <ul className="flex -space-x-px text-sm justify-end pt-5 mt-5">
                    {Array.from({ length: Math.ceil(filterData.length / rowsPerPage) }, (_, index) => (
                        <li key={index}>
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageClick(index + 1);
                                }}
                                className={`flex items-center justify-center w-10 h-10 leading-tight ${activePage === index + 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} rounded-full hover:bg-gray-100 hover:text-gray-700`}
                            >
                                {index + 1}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center mb-4 ">
                <div>
                    <select
                        className="border p-2 rounded "
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}>
                        <option value={1}>Show 1</option>
                        <option value={10}>Show 10</option>
                        <option value={25}>Show 25</option>
                        <option value={50}>Show 50</option>
                        <option value={100}>Show 100</option>
                    </select>
                </div>
            </div>
            <div className='flex  justify-center'>
                <div>
                    <button className='rounded-md bg-white p-2 text-black text-sm py-2 w-32 border border-1 border-black me-4'>Cancel</button>
                    <button className='rounded-md bg-yellow-600 p-2 text-white text-sm py-3 ms-2 w-32'>Save</button>
                </div>
            </div>
        </div>
    );
}

export default Compliancelist;