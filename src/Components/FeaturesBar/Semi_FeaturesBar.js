import React from 'react';
import './FeaturesBar.css';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import I1 from '../../Asserts/NewCC/img1.jpg';
import I2 from '../../Asserts/NewCC/img2.png';
import I3 from '../../Asserts/NewCC/img3.png';
import I4 from '../../Asserts/NewCC/img4.png';
import I5 from '../../Asserts/NewCC/img5.png';
import I6 from '../../Asserts/NewCC/img6.jpg';
import I7 from '../../Asserts/NewCC/img7.jpg';
import I8 from '../../Asserts/NewCC/img8.jpg';

function Semi_FeaturesBar() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="FMenu">
      <div className="photoes">
        <Slider {...settings}>
          <div>
            <img src={I1} className="img" alt="Pictur1" />
          </div>
          <div>
            <img src={I2} className="img" alt="Pictur1" />
          </div>
          <div>
            <img src={I3} className="img" alt="Pictur1" />
          </div>
          <div>
            <img src={I4} className="img" alt="Pictur1" />
          </div>
          <div>
            <img src={I5} className="img" alt="Pictur1" />
          </div>
          <div>
            <img src={I6} className="img" alt="Pictur1" />
          </div>
          <div>
            <img src={I7} className="img" alt="Pictur1" />
          </div>
          <div>
            <img src={I8} className="img" alt="Pictur1" />
          </div>
        </Slider>
      </div>
      <div className="Ftopic">Available features</div>
      <div className="alli">
        <div style={{ color: 'white', fontSize: '20px' }}>
          <div>Facilities</div>
          <div>
            <li>60 students allowance</li>
            <li>High Quality Audio</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Semi_FeaturesBar;
