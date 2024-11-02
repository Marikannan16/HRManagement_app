// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //     assignedClients: {
// //         totalclients: 180,
// //         state: 80,
// //         District: 90,
// //         branch: 10,
// //     },
// //     clientPriority: {
// //         low: 10,
// //         medium: 10,
// //         high: 8,
// //     },
// //     complianceStatus: {
// //         completed: 70,
// //         notCompleted: 54,
// //         partiallyCompleted: 30,
// //         overdue: 15,
// //     },
// //     filters: {
// //         company: '',
// //         area: '',
// //         state: '',
// //         branch: '',
// //         dateRange: { start: '', end: '' },
// //     },
// //     filteredData: [],
// //     data: [],
// //     labels: ['Complied', 'Not Complied', 'Partially', 'Overdue'],
// //     value: [37.5, 17.27, 14.22, 31.32],
// //     pagination: {
// //         currentPage: 1,
// //         totalPages: 10, 
// //         pageSize: 5,
// //     },
// //     complianceData: {
// //         complied: 60,
// //         notComplied: 20,
// //         partiallyComplied: 12,
// //         overdue: 8,
// //     },
// //     graph: {
// //         complied: [30, 20, 25, 50, 40, 60, 70, 80, 90, 100], // Example data
// //         notComplied: [10, 20, 15, 10, 20, 10, 5, 10, 5, 5],
// //         partially: [20, 30, 35, 10, 15, 20, 30, 10, 10, 10],
// //         overdue: [5, 15, 10, 20, 15, 10, 5, 10, 5, 5],
// //     },
    
// //     complied: 60,
// //     notComplied: 20,
// //     partiallyComplied: 12,
// //     overdue: 8

// // };

// // const dashboardSlice = createSlice({
// //     name: 'dashboard',
// //     initialState,
// //     reducers: {
// //         updateFilter: (state, action) => {
// //             const { filterType, value } = action.payload;
// //             state.filters[filterType] = value;
// //         },
// //         setFilter(state, action) {
// //             const { key, value } = action.payload;
// //             state.filters[key] = value;
// //         },
// //         applyFilters(state) {
// //             const { company, area, state: filterState, branch, priority, dateRange } = state.filters;
// //             state.filteredData = state.data.filter(item => {
// //                 // Update totalPages
// //                 state.pagination.totalPages = Math.ceil(state.filteredData.length / state.pagination.rowsPerPage);
// //                 return (
// //                     (!company || item.company.includes(company)) &&
// //                     (!area || item.area.includes(area)) &&
// //                     (!filterState || item.state.includes(filterState)) &&
// //                     (!branch || item.branch.includes(branch)) &&
// //                     (!priority || item.priority.includes(priority)) &&
// //                     (!dateRange.start || new Date(item.date) >= new Date(dateRange.start)) &&
// //                     (!dateRange.end || new Date(item.date) <= new Date(dateRange.end))
// //                 );
// //             });
// //         },
// //         setData(state, action) {
// //             state.data = action.payload;
// //         },
// //         updateComplianceData: (state, action) => {
// //             state.labels = action.payload.labels;
// //             state.data = action.payload.data;
// //         },
// //         setComplianceStatus(state, action) {
// //             const { complied, notComplied, partiallyComplied, overdue } = action.payload;
// //             state.complianceStatus.completed = complied;
// //             state.complianceStatus.notCompleted = notComplied;
// //             state.complianceStatus.partiallyCompleted = partiallyComplied;
// //             state.complianceStatus.overdue = overdue;
// //         },
       
// //     },
// // });

// // export const {
// //     applyFilters,
// //     // setPage,
// //     // setRowsPerPage,
// //     // goToNextPage,
// //     // goToPreviousPage,
// //     // goToFirstPage,
// //     // goToLastPage,
// //     setComplianceStatus,
// //     setFilter,
// //     setData,
// //     updateFilter,
// //     updateComplianceData,
// // } = dashboardSlice.actions;

// // export const selectDashboardData = (state) => state.dashboard;

// // export default dashboardSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//     assignedClients: {
//         totalclients: 180,
//         state: 80,
//         District: 90,
//         branch: 10,
//     },
//     clientPriority: {
//         low: 10,
//         medium: 10,
//         high: 8,
//     },
//     complianceStatus: {
//         completed: 70,
//         notCompleted: 54,
//         partiallyCompleted: 30,
//         overdue: 15,
//     },
//     filters: {
//         company: '',
//         area: '',
//         state: '',
//         branch: '',
//         dateRange: { start: '', end: '' },
//     },
//     filteredData: [],
//     data: [],
//     pagination: {
//         currentPage: 1,
//         totalPages: 0, 
//         pageSize: 1,
//         totalItems:100,
//     },
//     complianceData: {
//         complied: 60,
//         notComplied: 20,
//         partiallyComplied: 12,
//         overdue: 8,
//     },
   
//     complied: 60,
//     notComplied: 20,
//     partiallyComplied: 12,
//     overdue: 8
// };

// const dashboardSlice = createSlice({
//     name: 'dashboard',
//     initialState,
//     reducers: {
//         updateFilter: (state, action) => {
//             const { filterType, value } = action.payload;
//             state.filters[filterType] = value;
//         },
//         setFilter(state, action) {
//             const { key, value } = action.payload;
//             state.filters[key] = value;
//         },
//         applyFilters(state) {
//             const { company, area, state: filterState, branch, priority, dateRange } = state.filters;
//             state.filteredData = state.data.filter(item => {
//                 return (
//                     (!company || item.company.includes(company)) &&
//                     (!area || item.area.includes(area)) &&
//                     (!filterState || item.state.includes(filterState)) &&
//                     (!branch || item.branch.includes(branch)) &&
//                     (!priority || item.priority.includes(priority)) &&
//                     (!dateRange.start || new Date(item.date) >= new Date(dateRange.start)) &&
//                     (!dateRange.end || new Date(item.date) <= new Date(dateRange.end))
//                 );
//             });
//             state.pagination.totalPages = Math.ceil(state.filteredData.length / state.pagination.pageSize);
//             console.log( state.pagination.totalPages);
            
//         },
//         setData(state, action) {
//             state.data = action.payload;
//         },
//         updateComplianceData: (state, action) => {
//             state.labels = action.payload.labels;
//             state.data = action.payload.data;
//         },
//         setComplianceStatus(state, action) {
//             const { complied, notComplied, partiallyComplied, overdue } = action.payload;
//             state.complianceStatus.completed = complied;
//             state.complianceStatus.notCompleted = notComplied;
//             state.complianceStatus.partiallyCompleted = partiallyComplied;
//             state.complianceStatus.overdue = overdue;
//         },
//         setCurrentPage(state, action) {
//             state.pagination.currentPage = action.payload;
//         },
//         setPageSize(state, action) {
//             state.pagination.pageSize = action.payload;
//             state.pagination.totalPages = Math.ceil(state.filteredData.length / action.payload);
//         }
//     },
// });

// export const {
//     applyFilters,
//     setComplianceStatus,
//     setFilter,
//     setData,
//     updateFilter,
//     updateComplianceData,
//     setCurrentPage,
//     setPageSize
// } = dashboardSlice.actions;

// export const selectDashboardData = (state) => state.dashboard;

// export default dashboardSlice.reducer;
