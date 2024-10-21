import React, { memo } from 'react';

const ClickableArrow = memo((props) => {

  const rotate = (direction) => {
    // eslint-disable-next-line default-case
    switch (direction) {
      case 'up': return 'rotate(-90deg)';
      case 'left': return 'rotate(0deg)';
      case 'down': return 'rotate(90deg)';
      case 'right': return 'rotate(180deg)'
    };
  };

  const rotateDeg = rotate(props.direction);

  const style = {
    transform: rotateDeg ?? 'rotate(0deg)'
  }
  return (
    <span>
      <img style={style} width={24} src='https://media4.giphy.com/media/9VRoi0kUiXu2vtsrGe/200w.gif' alt='clickable' />
    </span>
  );
});

export default ClickableArrow;