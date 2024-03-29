import React from 'react';
import './AdminFooter.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.jpg';

const quick__links = [
  {
    path: '/admin-calander',
    display: 'Calander',
  },
  {
    path: '/admin-userdetails',
    display: 'User Details',
  },
  {
    path: '/admin-facility',
    display: 'Facility',
  },
  {
    path: '/admin-about',
    display: 'About',
  },
];

const quick__links2 = [
  {
    path: '/',
    display: 'Gallery',
  },
  {
    path: '/',
    display: 'Login',
  },
  {
    path: '/',
    display: 'Register',
  },
];

const AdminFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="Adminfooter">
      <Container>
        <Row>
          <Col lg="3">
            <img src={logo} alt="" />
            <p> Faculty of Engineering</p>
            <p>University of Ruhuna</p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to="#">
                  <i className="ri-youtube-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-facebook-circle-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-instagram-fill"></i>
                </Link>
              </span>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>

            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i className="ri-mail-send-fill"></i>
                </span>
                Email:
              </h6>
              <p className="mb-0 d-flex align-items-center gap-2">
                hod@is.ruh.ac.lk
              </p>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i className="ri-phone-fill"></i>
                </span>
                Phone:
              </h6>
              <p className="mb-0 d-flex align-items-center gap-2">0761234568</p>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <span>
                  <i className="ri-message-2-fill"></i>
                </span>
                Text :
              </h6>
              <p className="mb-0 d-flex align-items-center gap-2">0761234568</p>
            </ListGroupItem>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Department of Iterdisciplinary Studies - {year}, All rights are
              reserved.{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AdminFooter;
