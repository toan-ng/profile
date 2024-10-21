import React, { memo, useState } from 'react';
import ClickableArrow from './ClickableArrow';

const ScrollUpButton = memo(() => {
  const [isScrollingDown, setScrollingDown] = useState(false);

  window.onscroll = () => {
    const scrollDown = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    setScrollingDown(scrollDown);
  }

  const style = { display: isScrollingDown ? "block" : "none" }

  return (
    <div>
      <button id='scroll-up-btn' style={style}
        onClick={(e) => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          e.preventDefault();
        }}
      >
        <ClickableArrow direction={'up'} />
      </button>
    </div>
  );
});

export default ScrollUpButton;