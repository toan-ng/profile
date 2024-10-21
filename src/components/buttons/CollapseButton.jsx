import React, { memo } from 'react';
import ClickableArrow from './ClickableArrow';

const CollapseButton = memo(({ field, isExpanding, onExpand }) => {
  const id = "#" + field + "_Collapse"
  return (
    <div
      onClick={(e) => { onExpand(); e.preventDefault() }}
      data-bs-toggle="collapse"
      data-bs-target={id}
      aria-expanded="false"
      aria-controls={id}
      className={`${isExpanding ? "mt-2" : "mt-4"} btn btn-outline-warning shadow w-75 d-block m-auto rounded-pill py-2 mb-4 z-1`}
    >
      <ClickableArrow direction={isExpanding ? 'up' : 'down'} />
      <ClickableArrow direction={isExpanding ? 'up' : 'down'} />
      <ClickableArrow direction={isExpanding ? 'up' : 'down'} />
    </div>
  );
});

export default CollapseButton;