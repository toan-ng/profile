import React, { memo } from 'react';
import expIcon from '../../assets/img/shhh.png';

// Function to calculate years and months of experience
const calculateExperience = (startDate) => {
  const now = new Date();
  const start = new Date(startDate);

  const yearsDiff = now.getFullYear() - start.getFullYear();
  const monthsDiff = now.getMonth() - start.getMonth();
  const totalMonths = yearsDiff * 12 + monthsDiff;

  // Return value and unit
  if (totalMonths < 12) {
    return { value: totalMonths, unit: "month" }; // Returns months if less than a year
  }

  // If total months is 12 or more, return decimal years
  return { value: (totalMonths / 12).toFixed(1), unit: "year" }; // Returns decimal years
};

const YoE = memo((props) => {
  // Starting experience date
  const startDate = '2024-07-01'; // Starting from July 2024
  const { value, unit } = calculateExperience(startDate); // Calculate experience
  const hasExp = value !== 0;
  const icon = <img width={50} src={expIcon} rel='noreferrer' alt='exp' />;

  const style = {
    fontSize: '3.8rem',
    fontWeight: 600,
    height: '90px',
    backgroundColor: hasExp ? '#FEDD65' : 'transparent',
    width: '90px',
    margin: '0 auto'
  };

  const headingStyle = {
    color: hasExp ? 'black' : '#6c757d', // Change text color based on experience presence
    fontSize: '1.25rem', // Adjust font size if needed
    marginTop: '1rem' // Ensure some spacing
  };

  return (
    <div className='position-relative mb-4'>
      <div className='bg-warning-subtle rounded-pill' style={style}>
        {hasExp ? value : icon}
      </div>
      <h5 className='mt-1' style={headingStyle}>
        {hasExp ? `${unit[0].toUpperCase()}${unit.slice(1)}${value > 1 ? "s" : ""} of` : 'No Experience'} <b>Experience</b>
      </h5>
    </div>
  );
});

export default YoE;
