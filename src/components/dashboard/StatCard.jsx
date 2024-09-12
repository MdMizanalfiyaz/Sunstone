// import React from 'react';
// import PropTypes from 'prop-types';

// const StatCard = ({ title, value }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//       <div>
//         <h4 className="text-sm font-medium text-gray-600">{title}</h4>
//         <p className="text-2xl font-bold text-gray-900">{value}</p>
//       </div>
//       <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
//         <svg
//           className="w-6 h-6 text-gray-600"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v7l5 5M3 5h7l3 9h4l3 6" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// StatCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
// // value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// };

// export default StatCard;



import React from 'react';
import PropTypes from 'prop-types';

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <div className="icon bg-blue-500 p-2 rounded-full text-white mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-2xl">{value}</p>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired, // title is required
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
};

export default StatCard;
