import './Home.css';
import React from 'react';
import HeaderNew from '../../../Components/Header/HeaderNew';
import { Container, Row, Col } from 'reactstrap';
import heroImg01 from '../../../Assets/images/hero-img01.jpg';
import heroImg02 from '../../../Assets/images/hero-img02.png';
import heroImg03 from '../../../Assets/images/hero-img03.jpg';
import Subtitle from '../../../shared/Subtitle';
import Newsletter from '../../../shared/Newsletter';
import ImagesGallery from '../../../Components/Image-gallery/ImagesGallery';
import mission from '../../../Assets/mission.png';
import vision from '../../../Assets/vision.png';
import reservation from '../../../Assets/reservation.jpg';
import Footer from '../../../Components/Footer/Footer';

function Home() {
  return (
    <>
      <HeaderNew />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <h1>
                  The Department of Interdisciplinary Studies
                  <span className="highlight"> DIS </span>
                </h1>

                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={'Overview '} />
                </div>

                <div className="hero__subtitle">
                  <p>
                    Out of the five departments at the Faculty of Engineering,
                    which was established in July, 1999 at Galle, the Department
                    of Interdisciplinary Studies is the Department, which cater
                    for the managerial skill development while supporting the
                    major streams by providing the necessary background
                    knowledge in Mathematical areas.The Department of
                    Interdisciplinary Studies (DIS) has mainly designed its
                    curriculum to bridge the gap between the student’s technical
                    skills and personal development. The Department offers
                    courses for all students regardless of the discipline. It
                    facilitates all other departments by providing the basic
                    skills required to follow their degree programs.{' '}
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg01} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-4">
                <img src={heroImg02} alt="" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg03} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <div className="CommonGlass">
            <div className="BoxContainer">
              <div className="service__box">
                <div className="Info__Images">
                  <img src={vision} />
                </div>
                <div className="Info__Text">
                  <Subtitle subtitle={' Vision '} />
                  <p>
                    Professional Engineers with a sound technical foundation to
                    be foremost in interpersonal and managerial skills for a
                    challenging tomorrow.
                  </p>
                </div>
              </div>

              <div className="service__box">
                <div className="Info__Images">
                  <img src={mission} />
                </div>
                <div className="Info__Text">
                  <Subtitle subtitle={' Mission '} />
                  <p>
                    Through broad liberal education to train Engineering
                    undergraduates for careers of leadership, especially in
                    Engineering, with those attitudes, abilities, and skills
                    that would give them mastery over a challenging professional
                    world with a clear understanding of the impact of their work
                    on society and the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <Newsletter />
      </Container>

      {/* GALLERY*/}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title"> Visit our gallery </h2>
            </Col>
            <Col lg="12">
              <ImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Home;
