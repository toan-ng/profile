/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import SocialNetwork from './SocialNetwork';

const Header = memo(() => {

  const ShrinkHeader = () => {
    return (
      <div id='shrink-header' className=''>
        <div className='d-flex justify-content-between align-items-center border-top border-bottom py-3'>
          <a href='https://dev.toann.casa' rel='noopener noreferer' target='_blank' className='my-name text-uppercase' style={{ textWrap: 'nowrap' }}>Toan Nguyen</a>
          <button id='header-menu-btn' className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#bs-extending-header"
            aria-controls="bs-extending-header"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon d-flex align-items-center justify-content-center">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <header className="navbar-collapse collapse text-start" id="bs-extending-header">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className='nav-item'><a href='https://dev.toann.casa' target='_blank' rel='noopener noreferer' className="nav-link px-2 link-dark" >ABOUT</a></li>
            <li className='nav-item'><a href='https://dev.toann.casa' target='_blank' rel='noopener noreferer' className="nav-link px-2 link-dark" >RESUME</a></li>
            <li className='nav-item'><a href='https://dev.toann.casa' target='_blank' rel='noopener noreferer' className="nav-link px-2 link-dark" >PORFOLIO</a></li>
            <li className='nav-item'><a href='#contact' className="nav-link px-2 link-dark" rel='noreferrer'>CONTACT</a></li>
          </ul>
          <ul className="nav gap-4 d-flex flex-nowrap justify-content-start ps-1 my-1">
            <SocialNetwork />
          </ul>
        </header>
      </div>
    )
  }

  const ExpandHeader = () => {
    return (
      <div id='expand-header'>
        <header className="row text-center align-items-center justify-content-md-between py-3 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0 text-start">
            <span className='my-name text-uppercase' style={{ textWrap: 'nowrap' }}>Toan Nguyen</span>
          </div>
          <ul className="nav ml-3 col-auto mb-2 justify-content-evenly mb-md-0 align-self-center text-end">
            <li><a href='https://dev.toann.casa' target='_blank' rel='noopener noreferer' className="nav-link px-2 link-dark" >ABOUT</a></li>
            <li><a href='https://dev.toann.casa' target='_blank' rel='noopener noreferer' className="nav-link px-2 link-dark">RESUME</a></li>
            <li><a href='https://dev.toann.casa' target='_blank' rel='noopener noreferer' className="nav-link px-2 link-dark">PORFOLIO</a></li>
            <li><a href='#contact' className="nav-link px-2 link-dark">CONTACT</a></li>
          </ul>
          <div className="nav gap-4 col-md-3 d-flex flex-nowrap justify-content-end">
            <SocialNetwork />
          </div>
        </header>
      </div>
    )
  }

  return (
    <div style={{ display: "block", margin: "0 auto", width: "60%" }}>
      <ShrinkHeader />
      <ExpandHeader />
    </div>
  );
});

export default Header;