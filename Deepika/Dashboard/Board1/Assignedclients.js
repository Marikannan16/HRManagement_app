import React from 'react'
import { TbReportAnalytics } from 'react-icons/tb';
const Assignedclients = ({ totalclients, state, district, branch }) => {
  return (
    <div>
      <div className='border rounded mt-2'>
        <div>
          <h5 className='font-semi bold ps-12 mt-3' >Assigned Clients</h5>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 mt-5 mb-5 font-poppins font-ExtraLight  200">
          <div className=" p-5 ms-14  rounded-lg shadow-md w-3/4 h-32 border-l-4 border-l-purple-500 " style={{ backgroundColor: '#eeeef7', borderColor: '#0000cc' }}>
            <div className="flex items-center ">
              <div className="p-1 rounded " style={{ backgroundColor: '#0000cc' }}>
                <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
              </div>
              <div className="ms-5 ps-2">
                <h5>Total Clients</h5>
                <p className="text-xl font-semibold">{totalclients}</p>
              </div>
            </div>
          </div>

          <div className=" p-5 ms-1  rounded-lg shadow-md w-3/4 h-32 border-l-4 " style={{ backgroundColor: '#c1f0c1', borderColor: '#46d246' }}>
            <div className="flex items-center" >
              <div className="p-1 rounded " style={{ backgroundColor: '#46d246', backgroundImage: `url('../../images/BLUE.png')` }}>
                <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
              </div>
              <div className="ms-5 ps-2">
                <h5>State</h5>
                <p className="text-xl font-semibold">{state}</p>
              </div>
            </div>
          </div>

          <div className=" p-5 rounded-lg -ms-12 shadow-md w-3/4 h-32 border-l-4 " style={{ backgroundColor: '#ffece6', borderColor: '#ff9d80' }}>
            <div className="flex items-center">
              <div className="p-1  rounded" style={{ backgroundColor: '#ff9d80' }}>
                <TbReportAnalytics style={{ color: 'white', fontSize: '30px' }} />
              </div>
              <div className="ms-5 ps-2">
                <h5>District</h5>
                <p className="text-xl font-semibold">{district}</p>
              </div>
            </div>
          </div>

          <div className=" p-5 rounded-lg -ms-24 shadow-md w-3/4 h-32 border-l-4 " style={{ backgroundColor: 'snow', borderColor: '#e6e600' }}>
            <div className="flex items-center">
              <div className="p-1 rounded" style={{ backgroundColor: '#e6e600' }}>
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
    </div>
  )
}

export default Assignedclients