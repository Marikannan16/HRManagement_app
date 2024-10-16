import React from 'react';
import { TbReportAnalytics } from 'react-icons/tb';
const ClientList = ({ totalCompany, state, district, branch }) => {
  return (
    <div className='border rounded mt-2'>
      <div>
        <h5 className='font-semi bold ps-12 mt-3' >Client list</h5>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 mt-5 mb-5 ">
        <div className=" p-5 ms-14  rounded-lg shadow-md w-3/4 h-32 border-l-4 border-l-purple-500 " style={{  backgroundColor: '#e6e6e6', borderColor: '#003366' }}>
          <div className="flex items-center ">
            <div className="p-1 rounded " style={{ backgroundColor: '#0d3d6e' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>Total company</h5>
              <p className="text-xl font-semibold">{totalCompany}</p>
            </div>
          </div>
        </div>

        <div className=" p-5 ms-1  rounded-lg shadow-md w-3/4 h-32 border-l-4 " style={{ backgroundColor: '#ffece6', borderColor: '#ff9d80' }}>
          <div className="flex items-center">
            <div className="p-1 rounded" style={{ backgroundColor: '#ff9d80' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>State</h5>
              <p className="text-xl font-semibold">{state}</p>
            </div>
          </div>
        </div>

        <div className=" p-5 rounded-lg -ms-12 shadow-md w-3/4 h-32 border-l-4 " style={{ backgroundColor: '#f4fafd', borderColor: '#00bfff' }}>
          <div className="flex items-center">
            <div className="p-1  rounded" style={{ backgroundColor: '#00bfff' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>District</h5>
              <p className="text-xl font-semibold">{district}</p>
            </div>
          </div>
        </div>

        <div className=" p-5 rounded-lg -ms-24 shadow-md w-3/4 h-32 border-l-4 " style={{ backgroundColor: '#c4ede0', borderColor: '#36b089' }}>
          <div className="flex items-center">
            <div className="p-1 rounded" style={{ backgroundColor: '#36b089' }}>
              <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
            </div>
            <div className="ms-5 ps-2">
              <h5>Branch</h5>
              <p className="text-xl font-semibold">{branch}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ClientList