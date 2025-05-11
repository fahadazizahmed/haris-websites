import React, { useState, useEffect } from 'react';
import './Hero.css';
import here1 from "../../assets/slider-default1.jpg"
import here2 from "../../assets/slider-default2.jpg"
import here3 from "../../assets/slider-default3.jpg"


const images = [
  here1,
  here2,
  here3,//gracethemesdemo.com/elvotix/wp-content/themes/elvotix-pr o/images/slides/slider-default1.jpg',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <div
        className="slider-background"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      >
        <div className="overlay"></div>
        <div className="slider-content">
          <div className="text-section">
            <h1>Leader For Youth Generation</h1>
            <p>
              Perspiciatis unde omnis iste natus error sitvolu arcu commodo
              undeomns ptatem accus antium mque ntium
            </p>
            <div className="buttons">
              <button className="btn-primary">Read</button>
              <button className="btn-outline">Host An Event</button>
            </div>
            <div className="dots">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
