import React, { memo } from 'react';
import ProjectImage from './ProjectImage';

const Project = memo((props) => {
  const { id, name, description, range, techStack, srcCode, imgUrl } = props;

  return (
    <div>
      <div className="card card-container rounded shadow mb-3 text-start">
        <div className="project-container m-0 row">
          <div className='col-xl-5 p-0 d-none d-xl-block'>
            <ProjectImage imgUrl={imgUrl} id={id} />
          </div>
          <div className='p-1 col col-xl-7'>
            <div className="card-body d-flex flex-column justify-content-between h-75">
              <h5 className="card-title">{name}</h5>
              <p className="card-text"><small className="text-secondary">⌚ {range}</small></p>
              <div style={{ minWidth: "150px" }} className='flex-fill'>
                <ul className='p-0 d-flex flex-column align-items-stretch justify-content-evenly h-100'>
                  {Object.entries(techStack).map(([k, value], index) => (
                    <li key={k}>
                      <span>{k.charAt(0).toUpperCase() + k.slice(1)}: &nbsp;</span>
                      <p className='fw-normal mb-1'>{value}</p>
                    </li>
                  ))}
                  <li>
                    <a className='src-code' href={srcCode} target='blank' >
                      <p className='align-text-bottom font-monospace fs-5 m-0 p-0'>
                        <b style={{ color: "#76abae" }}>&lt;/&gt; Source Code</b>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='fw-lighter pt-1'>
                <small>
                  🗒️ <i>{description}</i>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Project;