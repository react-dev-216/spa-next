import style from '../styles/gallery.module.scss';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  const images = [
    './images/image1.png',
    './images/image2.png',
    './images/image3.png',
    './images/image1.png',
    './images/image2.png',
    './images/image3.png',
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
  };
  return (
    <div className={style.wrapper}>
      <h1 id="gallery">Gallery</h1>
      <div className="container">
        <Slider {...settings}>
          {images &&
            images.map((x, i) => (
              <div key={i} style={{ width: '300px' }}>
                <img
                  src={x}
                  className={isMobile ? 'w-100' : 'img-fluid img-thumbnail'}
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
