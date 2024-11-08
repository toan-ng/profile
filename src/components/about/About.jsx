import React from 'react';
import YOE from './YoE';
import TechStack from './TechStack';

const About = () => {
  const TymeX = () => {
    return <span style={{ display: "inline-flex", paddingLeft: 2 }}><img width={68} src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK0xPTEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e622a8382b21b032819f520d792bef976ace053e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/TX_RGB_Primary_onWhite.png' /></span>
    // return <b style={{ color: "indigo", display: "flex-inline", alignItems: "center" }}>
    //   Tyme
    //   <span style={{ alignSelf: "self-start"}}>X</span>
    // </b>
  }
  return (
    <div className='container p-0' id='about'>
      <div className='row align-items-center'>
        <div className='col-md-7 p-md-0'>
          <p className='text-nowrap' >Hi, I am &thinsp; <span className='sub-my-name'>Toan Nguyen</span> <span style={{ fontSize: '1.6rem' }}>🙋‍♂️</span></p>
          <p style={{ textWrap: "nowrap" }}>A software engineer currently working at <a className='my-name' style={{ textDecorationLine: "none" }} href="https://www.skiplinow.com/"
            target="_blank" rel="noopener noreferrer">Skipli.</a></p>
          {/* <p> I'm dedicating to to learn new things, new better ways to develop clean, efficient, scalable, and reusable code as well as being a problem solver to grow and enhance my technical abilities especially in Spring frameworks, microservices design pattern, etc.</p> */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 25 }}>
            <p><i style={{ color: "orange", fontSize: 24 }} className="fa fa-lightbulb-o"></i> I am eager to take on new challenges that allow me to learn and develop clean, efficient, and scalable code. </p>
            <p>I am committed to continuous self-improvement and strive to enhance my skills each day, contributing positively to the team and company. </p>
          </div>
          {/* <p><i style={{ color: "orange", fontSize: 24 }} className="fa fa-lightbulb-o"></i> I look forward to the opportunity to contribute and grow in {<TymeX />}</p> */}
        </div>
        <div className='col-md-5 align-self-center text-center d-flex justify-content-center'>
          <YOE yoe={0} />
        </div>
      </div>
      {/* TECH STACKS */}
      <div style={{ margin: "20px auto" }}>
        <p style={{ width: "fit-content", display: "block", margin: "auto", padding: "0px 10px", backgroundColor: "#fedd65" }}>
          Technical Skills
        </p>
      </div>
      <div className="d-block m-auto techstack pt-2">
        <TechStack />
      </div>
    </div >
  );
};

export default About;