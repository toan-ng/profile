import React, { useEffect, useState } from 'react';

const UnderlyingLayers = ({ parentHeight }) => {
  const inheritHeight = parentHeight;
  const [layerHeight, setLayerHeight] = useState(inheritHeight);

  useEffect(() => {
    setLayerHeight(inheritHeight);
  }, [layerHeight, inheritHeight])

  return (
    <div className='underlying-layers position-relative'>
      <div style={{ height: layerHeight }} className='position-absolute shadow'></div>
      <div style={{ height: layerHeight }} className='position-absolute shadow'></div>
    </div>
  );
};

export default UnderlyingLayers;