import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pizza from './Pizza'

const Menu = () => {
  return (
    <section id='menu' className='bg-light'>
        <Container>
            <div className='text-center'>
        <h2 className='my-3 py-5' style={{color: "red"}}><span><i class="bi bi-balloon-heart"></i></span>  We’ve got Something for Everyone <span><i class="bi bi-balloon-heart"></i></span> </h2>
        </div>
        <Row>
            <Col md={4}>
                 <Pizza img={require('../assets/card1.jpg')} title=" Medium Pizza"  old="300" new="200" />
            </Col>
            <Col md={4}>
              {/* Add images as per you need i add for demo purpose */}
            <Pizza img={require('../assets/card1.jpg')} title="Macaroni" old="500" new="250"/> 
            </Col>
            <Col md={4}>
            <Pizza img={require('../assets/card1.jpg')} title="Margherita" old="600" new="300"/>
            </Col>
        </Row>     
        <Row>
          <Col md={4}>
          <Pizza img={require('../assets/card1.jpg')} title="Meat Pizza" old="600" new="300" />
          </Col>
          <Col md={4}>
          <Pizza img={require('../assets/card1.jpg')} title="Veggie Pizza" old="300" new="150"/>
          </Col>
          <Col md={4}>
          <Pizza img={require('../assets/card1.jpg')} title="Cheese Pizza" old="500" new="300"/>
          </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Menu