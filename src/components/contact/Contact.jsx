/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import SocialNetwork from '../SocialNetwork';
import JSConfetti from 'js-confetti';

const Contact = memo(() => {

  const handleConfetti = async () => {
    const config = {
      emojis: ['🌈', '😍', '🥰', '👏', '⚡️', '💥', '✨', '💫', '🌸', '🦄'],
      confettiNumber: 200,
      emojiSize: 28
    }
    const confetti = new JSConfetti();
    confetti.addConfetti(config);

    setTimeout(() => {
      confetti.clearCanvas();
    }, 3000);
  }

  return (
    <div id='contact'>
      <div id='contact-bg-image' className='d-flex align-items-start justify-content-center' >
        <div className="d-block m-auto w-50 py-5">
          <h3 className='fw-bold p-1'
            style={{ backgroundColor: "rgb(51, 41, 65, 0)", color: "#EEEEEE" }}>
            Interested in collaborating?
          </h3>
          <a id='hire-me-btn'
            href='mailto:toannguyenannn@gmail.com'
            className='btn btn-warning mt-3 p-3 fw-bold font-monospace'
            style={{ color: "rgb(51, 41, 65)" }}
            onClick={handleConfetti}>
            <button className='text-dark'>Hire Me!</button>
          </a>
        </div>
      </div>
      <div className="d-block m-auto w-50 py-5">
        <h3>Let's get in touch</h3>
        <p>I enjoy discussing new projects and challenges.<br />
          Please share as much info as possible so we can get the most out of our first catch-up.
        </p>
        <b>Living In:</b>
        <p>District 8, Ho Chi Minh City, Vietnam</p>
        <div className='d-flex justify-content-start'>
          <SocialNetwork />
        </div>
      </div>
      <footer
        className="p-5 container-fluid d-flex justify-content-around">
        <div><a href='#'>Toan Nguyen</a></div>
        <div><a href='#'>Fresher Fullstack Web Developer</a></div>
      </footer>
    </div>
  );
});

export default Contact;