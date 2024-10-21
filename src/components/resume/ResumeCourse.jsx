import React, { memo } from 'react';
import ClickableArrow from '../buttons/ClickableArrow';

const ResumeCourse = memo((props) => {
  const { id, title, batchOrInstructor, institution, institutionUrl, range, courseUrl, imgUrl, completeUrl } = props.course;
  const notAptech = parseInt(id) !== 3 && institution !== "FPT Aptech Academy";

  const style = {
    objectFit: notAptech ? "contain" : "fill",
    width: "90px",
    height: notAptech ? "80px" : "60px",
    borderRadius: notAptech && "50%"
  };

  return (
    <div className="resume-course my-3 row g-0 border rounded flex-md-row h-auto position-relative shadow-sm">
      <div className="col-auto d-none d-lg-block position-relative align-self-center p-2" >
        <a href={institutionUrl} target='_blank' alt={institution} rel="noreferrer">
          <img style={style} src={imgUrl} alt={institution} />
        </a>
      </div>
      <div className="vertical-left-border col p-2 ps-3 d-flex flex-column position-static">
        <a
          href={courseUrl} target='_blank'
          alt='Course url'
          className='course-title'
          rel="noreferrer"
        >
          <small>📖</small><span className="mb-2 lh-lg" >&nbsp; {title}</span>
        </a>

        <div className='d-flex justify-content-between'>
          <span style={{ flexBasis: "180px" }} className="mb-0 text-sm-nowrap">🏫 @{institution} </span>
          <span
            style={{ height: "1px", backgroundColor: "grey", margin: "0 10px", opacity: "0.6" }}
            className='align-self-center flex-grow-1'>
          </span>
          <span style={{ flexBasis: "100px" }} className="flex-shrink-0 text-end mb-1 text-muted text-nowrap align-self-center"> {range}</span>
        </div>

        <div className='d-flex justify-content-between mt-1'>
          <p>
            <span className='text-muted'>{notAptech ? "Instructor" : "Batch"} </span>
            {batchOrInstructor}
          </p>
          <a
            className='course-completion text-end fw-bold'
            href={completeUrl} target='_blank'
            alt='GPA URL' rel="noreferrer" >
            &nbsp;<ClickableArrow />
            {notAptech ? " Certificate of completion " : "GPA: 85.14/100"}
          </a>
        </div>
      </div>
    </div>
  );
});

export default ResumeCourse;