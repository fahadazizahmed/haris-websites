import React from 'react';
import { Container, Row, Col, Button, ProgressBar, Card } from 'react-bootstrap';
import './VoteCount.css';
import { FaBalanceScale, FaUsers, FaHome } from 'react-icons/fa';
import heroBg from '../../assets/sale_bg.jpg';

const features = [
  {
    icon: <FaBalanceScale size={32} />, // Replace with your icon
    title: 'Equality and Solidarity',
    desc: 'perspi ciatis unde omni iste natus error sit volup accus antium dolor emque laudantium',
  },
  {
    icon: <FaUsers size={32} />,
    title: 'To inspire Humanity',
    desc: 'perspi ciatis unde omni iste natus error sit volup accus antium dolor emque laudantium',
  },
  {
    icon: <FaHome size={32} />,
    title: 'Better Living Programs',
    desc: 'perspi ciatis unde omni iste natus error sit volup accus antium dolor emque laudantium',
  },
];

const VoteCount = () => {
  return (
    <section className="vote-count-section">
      {/* Hero Section */}
      <div className="vote-hero-section vote-hero-bg d-flex align-items-center justify-content-center text-center">
        <Container>
          <div className="vote-hero-content mx-auto">
            <div className="vote-hero-badge mb-3">Every Vote Count</div>
            <h1 className="vote-hero-title mb-2">BELIEVE IN <span className="vote-hero-title-accent">CHANGE</span></h1>
            <div className="vote-hero-stars mb-2">**</div>
            <div className="vote-hero-subtitle mb-3">
              <span className="fw-bold">NEVER UNDERESTIMATE</span><br />
              THE POWER OF <span className="vote-hero-title-accent">AMERICAN PEOPLE</span>
            </div>
            <Button className="vote-hero-btn">Read More</Button>
          </div>
        </Container>
      </div>

      {/* Lower Section */}
      <div className="vote-lower-section py-5 bg-white">
        <Container>
          <Row className="g-5 align-items-center">
            {/* Left Side */}
            <Col md={6}>
              <div className="text-success fw-semibold mb-2 vote-diff-subtitle">Let Make a Difference</div>
              <h2 className="fw-bold mb-3 vote-diff-title">Together We can<br />Make Something Great!</h2>
              <p className="text-secondary mb-4 vote-diff-desc">
                Sed ut perspiciatis unde omnis iste natus error sit volup accusantium doloremque laudantium totam rem ape ramad, Donec condimentum, arcu commodo semper uismod, nunc sapien eaequie.
              </p>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">New Politic Programs</span>
                  <span className="fw-semibold text-success">90%</span>
                </div>
                <ProgressBar now={90} className="vote-progress-bar mb-3" />
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">Regulations & Rules</span>
                  <span className="fw-semibold text-success">95%</span>
                </div>
                <ProgressBar now={95} className="vote-progress-bar" />
              </div>
              <Button className="vote-diff-btn">Donate Now!</Button>
            </Col>
            {/* Right Side */}
            <Col md={6}>
              <div className="vote-features-cards p-3 p-md-4 rounded-4">
                {features.map((feature, idx) => (
                  <Card key={feature.title} className="vote-feature-card mb-4 border-0">
                    <div className="vote-feature-icon mb-3">{feature.icon}</div>
                    <Card.Body className="p-0">
                      <Card.Title className="fw-bold mb-2 vote-feature-title">{feature.title}</Card.Title>
                      <Card.Text className="text-white-50 small mb-0 vote-feature-desc">{feature.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default VoteCount;
