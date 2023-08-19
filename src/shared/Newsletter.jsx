import React from 'react'
import Subtitle from './Subtitle'

import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'

import reservation from '../Assets/reservation.jpg'
const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                <Subtitle subtitle={"Online Resevation Facility"}/>  
                    <p>
                    Revolutionize the way our faculty thrives with 
                    our cutting-edge online reservation system! Seamlessly designed 
                    for convenience, our platform empowers faculty members, visiting 
                    lecturers, and even cross-disciplinary colleagues to effortlessly 
                    secure coveted slots for shared facilities like state-of-the-art 
                    computer centers and our inspiring seminar room. Harnessing the 
                    power of technology, users can access this user-friendly portal 
                    from anywhere, anytime, streamlining the reservation process to 
                    a few clicks. Whether it's a dynamic lecture or a collaborative 
                    workshop, our system fosters a harmonious environment by accommodating 
                    inter-faculty requests, ensuring every brilliant mind has the 
                    opportunity to shine. Experience a new era of hassle-free booking 
                    and resource allocation with our intuitive reservation system.
                    </p>
                    

                </div>
            </Col>


            <Col lg ='4'>
          <div className="reservation__img">
            <img src={reservation} alt=""/>
          </div>
        </Col>

            
        </Row>
    </Container>
  </section>
}

export default Newsletter