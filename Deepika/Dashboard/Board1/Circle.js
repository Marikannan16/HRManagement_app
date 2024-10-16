import React from 'react';
import CircularProgressBar from './CircularProgressBar'; 

const Circle = ({ complied, notComplied, partiallyComplied, overdue }) => {
    return (
    <div className='border mt-5 pe-4 ps-4 pb-4 rounded'>
      <h6 className="mb-4 mt-4">Status of Activities</h6>
      <div className="flex justify-between items-center -space-x-5">
        <div>
          <div className='ps-12 mt-3'>
            <label>Complied</label>
          </div>
          <CircularProgressBar
            value={complied}
            label="Complied"
            color="#28a745"
          />
        </div>
        <div>
          <div className='ps-12 mt-3'>
            <label>Not Complied</label>
          </div>
          <CircularProgressBar
            value={notComplied}
            label="Not Complied"
            color="#dc3545"
          />
        </div>
        <div>
          <div className='ps-9 mt-3'>
            <label>Partially Complied</label>
          </div>
          <CircularProgressBar
            value={partiallyComplied}
            label="Partially Complied"
            color="#ffc107"
          />
        </div>
        <div>
          <div className='ps-12 mt-3'>
            <label>Overdue</label>
          </div>
          <CircularProgressBar
            value={overdue}
            label="Overdue"
            color="#fd7e14"
          />
        </div>
      </div>
    </div>
  );
};

export default Circle;
