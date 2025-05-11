import React from 'react';
import './Mission.css';

const cardData = [
  {
    title: 'Economic Empowerment',
    desc: 'perspiciatis unde omnis iste natus error sitvolu patetam accus antium dolore mque lauka ntium',
    img: 'https://img.icons8.com/doodle/80/000000/economy.png',
    alt: 'Economic Icon',
  },
  {
    title: 'Quality Education for All',
    desc: 'perspiciatis unde omnis iste natus error sitvolu patetam accus antium dolore mque lauka ntium',
    img: 'https://img.icons8.com/color/96/000000/open-book--v2.png',
    alt: 'Education Icon',
  },
  {
    title: 'Healthcare Services for All',
    desc: 'perspiciatis unde omnis iste natus error sitvolu patetam accus antium dolore mque lauka ntium',
    img: 'https://img.icons8.com/doodle/96/000000/healthcare.png',
    alt: 'Healthcare Icon',
  },
];

function MissionSection() {
  return (
    <div className="mission-section">
      <div className="mission-header">
        <div className="mission-subtitle">Our Mission & Vision</div>
        <h2 className="mission-title">Visionary Leadership<br/>United Progress</h2>
      </div>
      <div className="mission-cards">
        {cardData.map((card, i) => (
          <div className="mission-card" key={i}>
            <div className="mission-icon-wrap">
              <img className="mission-icon" src={card.img} alt={card.alt} />
            </div>
            <div className="mission-card-title">{card.title}</div>
            <div className="mission-card-desc">{card.desc}</div>
            <button className="mission-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionSection;
