import React, { useState } from 'react';
import Menu from './Menu';
import Search from './Search';
import September from './September';
import { notifications } from './Dummy';
import Item from './Item';
import { data } from './Data';
import moment from 'moment';

const Message = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState(null);

    const filterItems = (items) => {
        return items.filter(item => {
            const matchesSearch = item.message.toLowerCase().includes(searchTerm.toLowerCase());

            const itemDate = moment(item.time, "MMM DD, hh:mm A");

            let matchesDate = true;

            if (startDate) {
                if (startDate.length === 2) {
                    const startOfDay = moment(startDate[0]).startOf('day');
                    const endOfDay = moment(startDate[1]).endOf('day');

                    matchesDate = itemDate.isBetween(startOfDay, endOfDay, null, '[]');
                } else if (startDate.length === 1) {
                    const selectedDate = moment(startDate[0]).startOf('day');
                    matchesDate = itemDate.isSame(selectedDate, 'day');
                }
            }

            return matchesSearch && matchesDate;
        });
    };

    const filteredNotifications = filterItems(notifications);
    const filteredData = filterItems(data);

    return (
        <div className='ps-5 pe-5 font-poppins'>
            <Menu filteredNotifications={filteredNotifications} filteredData={filteredData} />
            
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                startDate={startDate}
                setStartDate={setStartDate}
            />

            {filteredNotifications.length > 0 && (
                <div className="bg-white border rounded-lg shadow mt-5 p-5">
                    <div className="p-2 font-semibold">Sep 12, 2024</div>
                    {filteredNotifications.map((notification, index) => (
                        <September
                            key={index}
                            time={notification.time}
                            message={notification.message}
                            status={notification.status}
                        />
                    ))}
                </div>
            )}

            {filteredData.length > 0 && (
                <div className="p-6 bg-white border rounded-lg shadow mt-5 mb-5">
                    <h6 className="p-2 font-semibold mb-4">Last Week</h6>
                    {filteredData.map((item, index) => (
                        <Item
                            key={index}
                            time={item.time}
                            message={item.message}
                            status={item.status}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Message;





// import React, { useState } from 'react';
// import Menu from './Menu';
// import Search from './Search';
// import September from './September';
// import {notifications} from './Dummy';
// import Item from './Item';
// import {data} from './Data';
// import moment from 'moment';
// import html2pdf from 'html2pdf.js';

// const Message = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [startDate, setStartDate] = useState(null);

//     const filterItems = (items) => {
//         return items.filter(item => {
//             const matchesSearch = item.message.toLowerCase().includes(searchTerm.toLowerCase());
    
//             const itemDate = moment(item.time, "MMM DD, hh:mm A");
    
//             let matchesDate = true;
    
//             if (startDate) {
//                 if (startDate.length === 2) {
//                     const startOfDay = moment(startDate[0]).startOf('day');
//                     const endOfDay = moment(startDate[1]).endOf('day');
    
//                     matchesDate = itemDate.isBetween(startOfDay, endOfDay, null, '[]');
//                 } else if (startDate.length === 1) {
//                     const selectedDate = moment(startDate[0]).startOf('day');
//                     matchesDate = itemDate.isSame(selectedDate, 'day');
//                 }
//             }
    
//             return matchesSearch && matchesDate;
//         });
//     };
    
//     const filteredNotifications = filterItems(notifications);
//     const filteredData = filterItems(data);

//     const handleDownload = () => {
//         const element = document.getElementById('content-to-pdf');
//         const options = {
//             margin: 1,
//             filename: 'message_page.pdf',
//             image: { type: 'jpeg', quality: 0.98 },
//             html2canvas: { scale: 4 },
//             jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//         };
//         html2pdf().from(element).set(options).save();
//     };

//     return (
//         <div className='ps-5 pe-5 font-poppins'>
//             <Menu onDownload={handleDownload} />
//             <Search
//                 searchTerm={searchTerm}
//                 setSearchTerm={setSearchTerm}
//                 startDate={startDate}
//                 setStartDate={setStartDate}
//             />

//             <div id="content-to-pdf">
//                 {filteredNotifications.length > 0 && (
//                     <div className="bg-white border rounded-lg shadow mt-5 p-5">
//                         <div className="p-2 font-semibold">Sep 12, 2024</div>
//                         {filteredNotifications.map((notification, index) => (
//                             <September
//                                 key={index}
//                                 time={notification.time}
//                                 message={notification.message}
//                                 status={notification.status}
//                             />
//                         ))}
//                     </div>
//                 )}

//                 {filteredData.length > 0 && (
//                     <div className="bg-white border rounded-lg shadow mt-5 p-5">
//                         <h6 className="p-2 font-semibold mb-4">Last Week</h6>
//                         {filteredData.map((item, index) => (
//                             <Item
//                                 key={index}
//                                 time={item.time}
//                                 message={item.message}
//                                 status={item.status}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </div>

//             {/* Download Button */}
//             <button
//                 className="btn btn-primary mt-4"
//                 onClick={handleDownload}>
               
//             </button>
//         </div>
//     );
// };

// export default Message;

