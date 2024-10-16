import React from 'react'
import { TbReportAnalytics } from 'react-icons/tb';
import Piechart from './Piechart'

const Clientpriority = ({ low, medium, high }) => {
    const data = [
        { name: 'Complied', value: 37.5 },
        { name: 'Not Complied', value: 17.27 },
        { name: 'Partially Complied', value: 14.22 },
        { name: 'Overdue', value: 31.32 },
    ];

    const colors = ['#40bf40',  '#FF8C00',' #e4ba4e','#f87171'];
    
    return (
        <div>
            <div className='border rounded  mt-8' style={{ height: '240px', width: '900px' }}>
                <div>
                    <h5 className='font-semi bold ps-12 mt-3 mb-5 pb-5' >Client Priority</h5>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 mt-5 mb-5 ">
                    <div className="p-5 ms-14 rounded-lg shadow-md  h-32 border-l-4 " style={{ backgroundColor: '#c4ede0', borderColor: '#36b089', width: '110%' }}>
                        <div className="flex items-center">
                            <div className="p-1 rounded" style={{ backgroundColor: '#36b089' }}>
                                <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
                            </div>
                            <div className="ms-5 ps-2">
                                <h5>Low</h5>
                                <p className="text-xl font-semibold">{low}</p>
                            </div>
                        </div>
                    </div>
                    <div className=" p-5 ms-24 rounded-lg shadow-md h-32 border-l-4 " style={{ width: '110%', backgroundColor: '#e6e6e6', borderColor: '#003366' }}>
                        <div className="flex items-center ">
                            <div className="p-1  rounded " style={{ backgroundColor: '#0d3d6e' }}>
                                <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
                            </div>
                            <div className="ms-5 ps-2">
                                <h5>Medium</h5>
                                <p className="text-xl font-semibold">{medium}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 rounded-lg ms-36 shadow-md h-32 border-l-4" style={{ backgroundColor: ' #fde8fd', borderColor: '#ff1a1a', width: '110%' }}>
                        <div className="flex items-center">
                            <div className="p-1 rounded" style={{ backgroundColor: '#ff1a1a' }}>
                                <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
                            </div>
                            <div className="ms-5 ps-2">
                                <h5>High</h5>
                                <p className="text-xl font-semibold">{high}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Piechart
                            title="Compliance Status"
                            pieData={data}
                            COLORS={colors}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientpriority