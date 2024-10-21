import { memo } from 'react';
import airlineServed from '../../assets/jsons/airlines.json';

const SagsExperience = memo(() => {
  const airlines = airlineServed;
  // const imgUrl = "https://sags.vn/img/logotrang.png";
  const imgUrl = "https://asset.brandfetch.io/idDyUZtqe5/idkUSnSICB.jpeg";

  return (
    <>
      <p>My Experience <br />
        <small className='fw-lighter'>Non-related field</small>
      </p>
      <div className="experience-field row border-top g-0 rounded flex-md-row mb-5 shadow h-md-150 position-relative pe-3">
        <div className="col-auto d-none d-lg-block position-relative align-self-center p-2" >
          <a href="https://sags.vn/" target='_blank' alt="sags.vn" rel='noreferrer'>
            <img src={imgUrl} alt='sags.vn' style={{ objectFit: "contain", width: "110px", height: "110px" }} />
          </a>
        </div>
        <div className="experience-content col p-2 ps-3 d-flex flex-column position-static">
          <div>
            <span>
              <img width={30} src='https://static.vecteezy.com/system/resources/previews/036/241/929/original/boarding-pass-icon-icon-related-to-air-travel-and-flight-information-flat-line-icon-style-element-illustration-vector.jpg' alt='work ckin' />
            </span>
            <span className="mb-2 lh-lg" >&nbsp; Customer Service Staff</span>
          </div>
          <div className='d-flex justify-content-between'>
            <span className='company d-block'>
              <img width={30} src='https://cdn-icons-png.flaticon.com/512/7720/7720736.png' alt='work ckin' />
              &nbsp; Tan Son Nhut Airport
            </span>
            <span className='linkLine align-self-center flex-grow-1'></span>
            <span className="time-duration flex-shrink-0 text-end mb-1 text-muted text-nowrap align-self-center">Jul 2014 - Jul 2021</span>
          </div>
          <div style={{ fontSize: '0.9em' }} className='mt-1 text-muted fw-lighter'>
            <span>As a check-in agent that served for serveral international & domestic airlines such as</span>
            <div className='d-flex flex-row flex-wrap align-items-center justify-content-md-between text-center'>
              {
                airlines && airlines.sort((prev, next) => prev.id === next.id ? 0 : prev.id > next.id ? -1 : 1).map((item, index) => (
                  <div key={item.code} className='flex-fill'>
                    <img
                      src={item.srcImg} alt={item.name}
                      height={item.code === 'ua' ? 33 : /vj|tw/.test(item.code) ? 20 : 23}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default SagsExperience;