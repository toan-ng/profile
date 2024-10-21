import Header from './components/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Porfolio from './components/porfolio/Porfolio';
import Contact from './components/contact/Contact';
import ScrollUpButton from './components/buttons/ScrollUpButton';
import React, { memo } from 'react';


const App = memo(() => {

  return (
    <div className='position-relative'>
      <div id='outter-header' className='container-fluid p-0'>
        <Header />
      </div>
      <div id='main'>
        <section>
          <About />
        </section>
        <section>
          <Resume />
        </section>
        <section className='d-block'>
          <Porfolio />
        </section>
      </div>
      <section className='container-fluid p-0 d-block'>
        <Contact />
      </section>

      <ScrollUpButton />
    </div>
  );
});

export default App;
