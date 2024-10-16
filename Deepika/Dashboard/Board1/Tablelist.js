import React from 'react'
import logo from '../../images/logo.png';
const Tablelist = ({ Dummy, currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (page) => {
        onPageChange(page);
    };
    const getPaginationButtons = (currentPage, totalPages) => {
        const paginationButtons = [];
        const maxButtons = 3;
        let startPage, endPage;

        if (totalPages <= maxButtons) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= Math.ceil(maxButtons / 2)) {
                startPage = 1;
                endPage = maxButtons;
            } else if (currentPage + Math.floor(maxButtons / 2) >= totalPages) {
                startPage = totalPages - maxButtons + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - Math.floor(maxButtons / 2);
                endPage = currentPage + Math.floor(maxButtons / 2);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationButtons.push(i);
        }

        const finalButtons = [];

        if (startPage > 1) {
            finalButtons.push(1);
            if (startPage > 2) finalButtons.push("...");
        }

        paginationButtons.forEach((button) => {
            finalButtons.push(button);
        });

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) finalButtons.push("...");
            finalButtons.push(totalPages);
        }

        return finalButtons;
    };

    return (
        <div>
            <div className='border mt-5 pe-4 ps-4 pb-4 rounded '>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table class="w-full text-sm text-left rtl:text-right text-black">
                        <thead class="text-xs text-black font-semibold">
                            <tr className=" bg-gray-300">
                                <th scope="col" class="px-6 py-3">S.No</th>
                                <th scope="col" class="px-6 py-3">Date</th>
                                <th scope="col" class="px-6 py-3">Company Name</th>
                                <th scope="col" class="px-6 py-3">State</th>
                                <th scope="col" class="px-6 py-3">Branch</th>
                                <th scope="col" class="px-6 py-3">Activity</th>
                                <th scope="col" class="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className='me-10'>
                            {Dummy.map((row) => (
                                <tr key={row.SNO}>
                                    <td className="px-6 py-1 border-b border-gray-300">{row.SNO}</td>
                                    <td className="px-2 py-1 border-b border-gray-300">{row.Date}</td>
                                    <td className="px-2 py-1 border-b border-gray-300">
                                        <div className='inline-flex'>
                                            <img src={logo} alt='' width="30" className='mr-2 mt-2 rounded-full' />
                                            <span className='mt-3'>{row.CompanyName}</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-1 border-b border-gray-300">{row.State}</td>
                                    <td className="px-2 py-1 border-b border-gray-300">{row.Branch}</td>
                                    <td className="px-2 py-1 border-b border-gray-300">{row.Activity}</td>
                                    <td className="px-2 py-1 border-b border-gray-300">
                                        <span className={`px-2 py-1 flex items-center justify-center w-32 h-8 text-sm font-semibold leading-tight rounded-full 
                                            ${row.Status === 'Not Complied' ? 'bg-red-400' : row.Status === 'Partially Complied' ? 'bg-amber-500 ps-7' : row.Status === 'Complied' ? 'bg-green-400' : 'bg-gray-200'}`}>{row.Status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="bg-white border border-gray-300 rounded-md px-4 py-2">
                        <span>
                            Page {currentPage} of {totalPages}
                        </span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button onClick={() => handlePageClick(1)} disabled={currentPage === 1}
                            className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
                            &laquo;
                        </button>

                        <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}
                            className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
                            &lt;
                        </button>

                        {getPaginationButtons(currentPage, totalPages).map((button, index) => {
                            if (button === '...') {
                                return (
                                    <span key={index} className="px-3 py-1 text-sm font-medium text-gray-700">
                                        {button}
                                    </span>
                                );
                            }
                            return (
                                <button key={index} onClick={() => handlePageClick(button)}
                                    className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${button === currentPage ? 'bg-yellow-400 font-bold' : ''}`}>
                                    {button}
                                </button>
                            );
                        })}

                        <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}
                            className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
                            &gt;
                        </button>

                        <button onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages}
                            className={`flex items-center justify-center px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
                            &raquo;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tablelist