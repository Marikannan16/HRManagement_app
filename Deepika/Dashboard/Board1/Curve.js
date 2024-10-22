import React from 'react';
import { LineChart, Line, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';

const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', marginBottom: '20px' }}>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
            <span style={{
              width: '12px',
              height: '12px',
              backgroundColor: entry.color,
              display: 'inline-block',
              marginRight: '5px'
            }} />
            {entry.dataKey}
          </li>
        ))}
      </ul>
    );
  };
  
const Curve= ({ chartData, title }) => {
  return (
    <div className='border mt-5 p-4 rounded'>
    <h5 className='mt-4 ps-2 mb-4'>{title}</h5>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        
        <Legend verticalAlign='top' content={<CustomLegend />} />
        
        <Line type="monotone" dataKey="Complied" stroke="#40bf40" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="NotComplied" stroke="#f87171" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="Partially" stroke="#e4ba4e" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="Overdue" stroke="#ff8c00" strokeWidth={2} dot={false} />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Curve;



// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';

// const CustomLegend = (props) => {
//   const { payload } = props;
//   return (
//     <ul style={{ listStyle: 'none', padding: 0, display: 'flex', marginBottom: '20px' }}>
//       {payload.map((entry, index) => (
//         <li key={`item-${index}`} style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}>
//           <span style={{
//             width: '12px',
//             height: '12px',
//             backgroundColor: entry.color,
//             display: 'inline-block',
//             marginRight: '5px'
//           }} />
//           {entry.dataKey}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const Curve = ({ chartData, title }) => {
//   return (
//     <div className='border mt-5 p-4 rounded-lg max-w-full overflow-hidden'>
//       <h5 className='mt-4 ps-2 mb-4 text-lg font-semibold'>{title}</h5>
//       <div className="w-full h-72 sm:h-96"> {/* Adjust height for different screen sizes */}
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={chartData}>
//             <XAxis dataKey="name" axisLine={false} tickLine={false} />
//             <YAxis axisLine={false} tickLine={false} />

//             <Legend verticalAlign='top' content={<CustomLegend />} />

//             <Line type="monotone" dataKey="Complied" stroke="#40bf40" strokeWidth={2} dot={false} />
//             <Line type="monotone" dataKey="NotComplied" stroke="#f87171" strokeWidth={2} dot={false} />
//             <Line type="monotone" dataKey="Partially" stroke="#e4ba4e" strokeWidth={2} dot={false} />
//             <Line type="monotone" dataKey="Overdue" stroke="#ff8c00" strokeWidth={2} dot={false} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Curve;
