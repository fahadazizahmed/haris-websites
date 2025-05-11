import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './KnowMore.css';
import leaderImg from '../../assets/elvotix_pro_about_image.png';

const features = [
  {
    number: '01',
    title: 'Get Involved',
    desc: 'Perspi ciatis und omnis iste natus volupt atemi omnis iste natus',
  },
  {
    number: '02',
    title: 'Democracy',
    desc: 'Perspi ciatis und omnis iste natus volupt atemi omnis iste natus',
  },
  {
    number: '03',
    title: 'Civil Rights',
    desc: 'Perspi ciatis und omnis iste natus volupt atemi omnis iste natus',
  },
  {
    number: '04',
    title: 'Enthusiasm',
    desc: 'Perspi ciatis und omnis iste natus volupt atemi omnis iste natus',
  },
];

const KnowMore = () => {
  return (
    <section className="know-more-section py-5 bg-white">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row g-5">
          <Col lg={6} className="pt-4 pt-lg-0">
            <div className="text-success fw-semibold mb-2 fs-6">Know More About</div>
            <h2 className="fw-bold mb-3 know-more-title">
              Right Leader at Right<br className="d-none d-md-block" />
              Time for the right Reason
            </h2>
            <p className="text-secondary mb-4">
              Sed ut perspiciatis unde omnis iste natus error sitvolu patem accus antium dolore mque lauda tium tota merem operamod, Donec condim enum, arcu com modo perspiciatis undeomns iste natus error sit volu patem. semper euis mo nunc sapien eaquie omnis iste natus error sit volup.
            </p>
            <Button variant="primary" className="px-4 py-2 fw-semibold know-more-btn">Join The Campaign</Button>
          </Col>
          <Col lg={6} className="text-center mb-4 mb-lg-0">
            <img src={leaderImg} alt="Leader" className="img-fluid rounded-4 know-more-leader-img" />
          </Col>
        </Row>
      </Container>
      <div className="know-more-features-section py-5 mt-4">
        <Container>
          <Row className="g-4">
            {features.map((feature, idx) => (
              <Col key={feature.number} xs={12} sm={6} md={6} lg={3}>
                <Card className="text-center h-100 border-0 shadow-sm know-more-feature-card py-3">
                  <div className="feature-number rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center">
                    {feature.number}
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold mb-2 know-more-feature-title">{feature.title}</Card.Title>
                    <Card.Text className="text-secondary small mb-0">{feature.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default KnowMore;
