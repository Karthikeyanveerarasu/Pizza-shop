import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Container,Row,Col} from 'react-bootstrap';

const Banner = () => {
  return (
    <div >
        <Container fluid>
           <Row  className='justify-content-center'>
            <Col lg={8}>
            <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/pizza.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='fst-bold'>First label</h3>
          <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/chicken.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/first.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className='d-none d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/burger.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className='d-none d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
           </Row>
           <div className='text-center'>
                   <h3 className='display-5'>Celebrate your Every Occasion ! !</h3>
                   <p className='lead text-muted'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           </div>
        </Container>
        
    </div>
  )
}

export default Banner