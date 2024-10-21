import React, { memo, useEffect, useState } from 'react';
import ResumeCourse from './ResumeCourse';
import educations from '../../assets/jsons/educations.json';

import UnderlyingLayers from './UnderlyingLayers';
import SagsExperience from './SagsExperience';
import CollapseButton from '../buttons/CollapseButton';
import { sortDescending } from '../../helper/helper';

const Resume = memo(() => {
  const [isExpand, setExpand] = useState(false);
  const field = "course";
  const courses = educations;
  const len = courses.length;
  const latestCourse = courses.find(c => c.id === len);

  const handleExpand = () => {
    setExpand(!isExpand);
  }
  const [parentHeight, setParentHeight] = useState("130px");
  useEffect(() => {
    setParentHeight(document.getElementById('latest-course-id').clientHeight);
  }, [parentHeight]);

  return (
    <div id='resume' className='mt-5' >
      <div className='text-center mb-3'>
        <p>Resume</p>
        <h3>Education & Experience</h3>
      </div>

      <div className={`position-relative z-0`} id='latest-course-id' style={{ backgroundColor: "#eeeeee", boxSizing: "border-box" }}>
        {!isExpand && <UnderlyingLayers parentHeight={parentHeight} />}
        <ResumeCourse key={latestCourse.id} course={latestCourse} />
      </div>

      <div className="collapse position-relative" id={field + "_Collapse"}>
        {courses && courses
          .filter(c => c.id !== latestCourse.id)
          .sort((prev, next) => sortDescending(prev.id, next.id))
          .map((c, index) => (
            <ResumeCourse key={c.id} course={c} />
          ))
        }
      </div>
      <CollapseButton field={field} onExpand={handleExpand} isExpanding={isExpand} />

      {/* Experience */}
      <SagsExperience />

    </div>
  );
});

export default Resume;