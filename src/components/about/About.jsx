import React from 'react';
import YOE from './YoE';
import TechStack from './TechStack';

const About = () => {
  return (
    <div className='container p-0' id='about'>
      <div className='row align-items-center'>
        <div className='col-md-7 p-md-0'>
          <p className='text-nowrap' >Hi, I am &thinsp; <span className='sub-my-name'>Toan Nguyen</span> <span style={{ fontSize: '1.6rem' }}>🙋‍♂️</span></p>
          <p style={{ textWrap: "nowrap" }}>A software engineer currently working at <a className='my-name' style={{ textDecorationLine: "none" }} href="https://www.skiplinow.com/"
            target="_blank" rel="noopener noreferrer">Skipli.</a></p>
          <p> I'm dedicating to to learn new things, new better ways to develop clean, efficient, scalable, and reusable code as well as being a problem solver to grow and enhance my technical abilities especially in Spring frameworks, microservices design pattern, etc.</p>
          <p><i style={{color: "orange", fontSize: 24}} className="fa fa-lightbulb-o"></i> I look forward to the opportunity to contribute and grow in the <b>TymeX</b> Internship Program 2024!</p>
        </div>
        <div className='col-md-5 align-self-center text-center d-flex justify-content-center'>
          <YOE yoe={0} />
        </div>
      </div>
      {/* TECH STACKS */}
      <div className="d-block m-auto techstack">
        <TechStack />
      </div>
    </div>
  );
};

export default About;