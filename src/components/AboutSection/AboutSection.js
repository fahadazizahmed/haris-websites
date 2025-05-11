import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import './AboutSection.css';
import here1 from "../../assets/wetoel.png"
import here2 from "../../assets/elvotix_pro_welcome_author.png"

function AboutSection() {
  return (
    <section className="about-section py-5 bg-white">
      <Container>
        <Row className="align-items-center g-5 flex-column-reverse flex-lg-row">
        <Col lg={6} className="position-relative text-center mb-4 mb-lg-0">
            <img
              src={here1}
              alt="Welcome section"
              className="about-single-img rounded-4  img-fluid"
              style={{ maxWidth: '85%', height: 'auto' }}
            />
          </Col>
          
          <Col lg={6} className="text-center text-lg-start">
            <div className="about-subtitle text-success fw-semibold mb-2">Welcome To Elvotix</div>
            <h2 className="about-title fw-bold mb-3">We Are Always Ready To<br />Help Resolve Problems</h2>
            <p className="about-desc text-secondary mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperamda, Donec condimentum, arcu commodo perspiciatis undeomns iste natus error sit voluptatem.
            </p>
            <ul className="about-list list-unstyled mb-4">
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="text-success me-2" /> Most easy Premium education process
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="text-success me-2" /> Research & Development before starting
              </li>
              <li className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" /> Making a quality health ideas
              </li>
            </ul>
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="fw-semibold text-secondary">City Development</span>
                <span className="fw-semibold text-success">87%</span>
              </div>
              <ProgressBar now={87} variant="success" style={{ height: '8px', borderRadius: '6px' }} />
            </div>
            <div className="d-flex align-items-center gap-3 flex-wrap bg-light p-3 rounded-4 shadow-sm">
              <img
                src={here2}
                alt="Jennifer Brown Avatar"
                className="about-author-avatar rounded-circle border border-2 border-white shadow-sm"
                style={{ width: 56, height: 56, objectFit: 'cover' }}
              />
              <div className="about-author-info">
                <div className="about-author-name fw-bold">Jennifer Brown</div>
                <div className="about-author-title text-secondary small">CEO & Founder of Manit</div>
              </div>
              <Button variant="success" className="ms-auto px-4">Read More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
