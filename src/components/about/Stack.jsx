import React, { memo, useState } from 'react';
import ClickableArrow from '../buttons/ClickableArrow';

const Stack = memo((props) => {
  const stack = props.stack;
  const collapseId = `collapseId_${stack.category}`;
  const [isActive, setActive] = useState(stack.category === "Frontend");

  return (
    <>
      <div className='row m-0 mb-3 border-bottom'>
        {/* Category */}
        <div
          onClick={() => setActive(!isActive)}
          className='col about-tech-category p-0' style={{ flexBasis: '170px', flexShrink: 0 }}>
          <a
            data-bs-toggle="collapse"
            href={'#' + collapseId}
            role="button" aria-expanded="false"
            aria-controls={collapseId}
          >
            <ClickableArrow direction={isActive ? 'down' : 'left'} /> &nbsp;
            {stack.category}
          </a>
        </div>
        {/* Icons */}
        <div className='col-sm p-0'>
          <ul className='techstack-icon'>
            {stack.icons.map((icon, index) => (
              <li key={index} style={{ flexBasis: '38px', flexShrink: 0 }}>
                <img width={26} src={icon} alt='icon' />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Technologies */}
      <div className={`${stack.category === "Frontend" ? "show" : ""} collapse w-75`} id={collapseId}>
        <div className="bg-transparent border-bottom mb-3">
          <ul className='row container float-left'>
            {stack.technologies.map((tech, index) => (
              stack.id < 4 ? <li key={index} className='text-nowrap col-lg-4 col-md-6'>🔹{tech}</li>
                : <li key={index} className='col-12'>
                  🔹{tech}
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
});

export default Stack;