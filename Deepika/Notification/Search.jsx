import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import flatpickr from 'flatpickr';
import "flatpickr/dist/themes/dark.css";
import { RiCalendar2Line, RiCloseLine } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';

const Search = ({ searchTerm, setSearchTerm, startDate, setStartDate }) => {
    const datePickerRef = useRef(null);
    const searchRef = useRef(null);

    useEffect(() => {
        if (datePickerRef.current) {
            flatpickr(datePickerRef.current, {
                mode: "range",
                dateFormat: "d/m/Y",
                defaultDate: startDate || null,
                onChange: (selectedDates) => {
                    setStartDate(selectedDates.length === 2 ? selectedDates : null);
                },
            });
        }
    }, [startDate, setStartDate]);

    const handleCalendarIconClick = () => {
        if (datePickerRef.current && datePickerRef.current._flatpickr) {
            datePickerRef.current._flatpickr.open();
        }
    };

    const handleCloseIconClick = () => {
        if (datePickerRef.current && datePickerRef.current._flatpickr) {
            datePickerRef.current._flatpickr.clear(); 
        }
        setStartDate(null); 
    };

    const handleSearchClick = () => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
    };

    const formattedDateRange = startDate && startDate.length === 2
        ? moment(startDate[0]).isSame(startDate[1], 'day')
            ? `${moment(startDate[0]).format('DD/MM/YYYY')}`
            : `${moment(startDate[0]).format('DD/MM/YYYY')} to ${moment(startDate[1]).format('DD/MM/YYYY')}`
        : startDate && startDate.length === 1
            ? `${moment(startDate[0]).format('DD/MM/YYYY')}`
            : '';

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 px-4 py-2 text-black">
            <div className="relative flex items-center border border-bordergray rounded-lg px-4 py-2 w-full md:w-64">
                <input
                    ref={datePickerRef}
                    type="text"
                    value={formattedDateRange}
                    placeholder="Date Range"
                    className="w-full border-none focus:outline-none"
                    readOnly
                />
                {!startDate && (
                    <RiCalendar2Line
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text--400"
                        onClick={handleCalendarIconClick}
                    />
                )}
                {startDate && (
                    <RiCloseLine size={20}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black bg-white"
                        onClick={handleCloseIconClick}
                    />
                )}
            </div>

            <div className="flex items-center border border-bordergray rounded-lg px-2 py-2 w-full md:w-64">
                <CiSearch size={20} className="mr-2 text-black cursor-pointer" onClick={handleSearchClick} />
                <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-none focus:outline-none w-full"
                />
            </div>
        </div>
    );
};

export default Search;

