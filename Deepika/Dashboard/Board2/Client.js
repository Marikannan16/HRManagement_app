import React, { useState } from 'react';
import Status from './Status';
import CompanyList from './Companylist';
import Table from './Table';
import companies from './companies';
import Graph from './Graph';
import Activity from './Activity';
import activities from './ActivityData';
import Filter from './Filter'
const Client = () => {
    const company = { totalCompany: 1, state: 43, district: 27, branch: 7 };
    const complianceData = { complied: 60, notComplied: 20, partiallyComplied: 12, overdue: 8 };

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalPages = 10;

    const [filters, setFilters] = useState({});

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const chartData = [
        { name: "Jan", Complied: 30, "NotComplied": 40, Partially: 20, Overdue: 10 },
        { name: "Feb", Complied: 35, "NotComplied": 30, Partially: 25, Overdue: 10 },
        { name: "Mar", Complied: 40, "NotComplied": 20, Partially: 30, Overdue: 10 },
        { name: "Apr", Complied: 50, "NotComplied": 25, Partially: 45, Overdue: 10 },
        { name: "May", Complied: 45, "NotComplied": 15, Partially: 30, Overdue: 10 },
        { name: "Jun", Complied: 50, "NotComplied": 20, Partially: 25, Overdue: 5 },
        { name: "Jul", Complied: 60, "NotComplied": 15, Partially: 20, Overdue: 5 },
        { name: "Aug", Complied: 55, "NotComplied": 30, Partially: 25, Overdue: 10 },
        { name: "Sep", Complied: 65, "NotComplied": 20, Partially: 15, Overdue: 10 },
        { name: "Oct", Complied: 60, "NotComplied": 10, Partially: 20, Overdue: 30 },
        { name: "Nov", Complied: 70, "NotComplied": 5, Partially: 15, Overdue: 10 },
        { name: "Dec", Complied: 75, "NotComplied": 5, Partially: 10, Overdue: 10 },
    ];

    return (
        <div  className='p-5'>
            <Filter onFilterChange={handleFilterChange} />
            <CompanyList
                totalCompany={company.totalCompany}
                state={company.state}
                district={company.district}
                branch={company.branch} />

            <Status {...complianceData} />

            <div className="py-4 ">
                <Table
                    companies={companies}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    itemsPerPage={itemsPerPage}
                    onItemsPerPageChange={setItemsPerPage}
                />
            </div>
            <Graph
                chartData={chartData}
                title="Compliance Status for the period April 2024 to August 2024" />
            <div>
                <Activity activities={activities}
                filters={filters}
                />
            </div>

        </div>
    );
};

export default Client;
