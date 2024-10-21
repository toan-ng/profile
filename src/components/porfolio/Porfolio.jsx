import React, { memo, useEffect, useState } from 'react';
import Project from './Project';
import porfolio from '../../assets/jsons/porfolio.json';
import UnderlyingLayers from '../resume/UnderlyingLayers';
import CollapseButton from '../buttons/CollapseButton';
import { sortDescending } from '../../helper/helper';

const Porfolio = memo(() => {
  const [isExpand, setExpand] = useState(false);
  const field = "porfolio"
  const myPorfolio = porfolio;
  const latestProject = myPorfolio.find(project => parseInt(project.id) === myPorfolio.length);
  const [parentHeight, setParentHeight] = useState("350px");

  const handleExpand = () => { setExpand(!isExpand); }

  useEffect(() => {
    setParentHeight(document.getElementById('latest-project-id').clientHeight ?? "350px");
  }, [parentHeight]);

  return (
    <div id='porfolio' className='pt-2 pb-5'>
      <div className='text-center mb-3'>
        <p>Porfolio</p>
        <h3>Student Projects</h3>

        <div className={`position-relative z-0`} id='latest-project-id'>
          {!isExpand &&
            <UnderlyingLayers parentHeight={parentHeight} />
          }
          <Project id={latestProject.id}
            code={latestProject.code}
            name={latestProject.name}
            description={latestProject.description}
            range={latestProject.range}
            roles={latestProject.roles}
            techStack={latestProject.techStack}
            srcCode={latestProject.srcCode}
            imgUrl={latestProject.imgUrl}
          />
        </div>
        <div className="collapse position-relative" id={field +"_Collapse"}>
          {myPorfolio && myPorfolio
            .filter(prj => parseInt(prj.id) !== parseInt(latestProject.id))
            .sort((prev, next) => sortDescending(prev.id, next.id))
            .map((prj, index) => (
              <div key={prj.code}>
                <Project id={prj.id}
                  code={prj.code}
                  name={prj.name}
                  description={prj.description}
                  range={prj.range}
                  roles={prj.roles}
                  techStack={prj.techStack}
                  srcCode={prj.srcCode}
                  imgUrl={prj.imgUrl}
                />
              </div>
            ))}
        </div>
        <div>
          <CollapseButton field={field} onExpand={handleExpand} isExpanding={isExpand} />
        </div>
      </div>
      <br />
    </div>
  );
});

export default Porfolio;