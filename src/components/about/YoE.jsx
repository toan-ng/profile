import React, { memo } from 'react';
import expIcon from '../../assets/img/shhh.png'

const YoE = memo((props) => {
  const hasExp = props.yoe !== 0;
  const icon = <img width={50} src={expIcon} rel='noreferrer' alt='exp' />;
  const style = {
    fontSize: '3.8rem',
    fontWeight: 600,
    height: '90px',
    backgroundColor: hasExp && '#FEDD65',
    width: '90px',
    margin: '0 auto'
  };

  return (
    <div className='position-relative mb-4'>
      <div className='bg-warning-subtle rounded-pill' style={style}>{hasExp ? props.yoe : icon}</div>
      <h5 className='mt-1'>Years of <b>Experience</b></h5>
    </div>
  );
});

export default YoE;