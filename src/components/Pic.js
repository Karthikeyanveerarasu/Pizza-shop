import React from 'react'
import { Col, Container, Row,Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Pic = () => {
  return (
    <section id='musttry'>
      <div className='text-center my-5 py-3'>
        <h5 style={{color: "red"}} className='display-5 fst-italic'><span><i class="bi bi-search-heart"></i> Super Sunday to you ! </span></h5>
     </div>
     <Container>
        <Row>
            <Col md={7}>
                <Image src={require('../assets/pexels.jpeg')} fluid={true} alt='offers'></Image>
            </Col>
            <Col md={5}>
                <div className='text-center'>
                    <h1 className='display-5'>CHICKEN PIZZA</h1>
                    <p className=' lead text my-5 py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris ut lorem consectetur rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc aliquam purus ac vehicula sodales. Aenean auctor ante est, nec sollicitudin orci consectetur volutpat.</p>
                    <Button variant="danger"> <span>BUY NOW <i class="bi bi-bag"></i> </span></Button>
                </div>
            </Col>
        </Row>
     </Container>
    </section>
  )
}

export default Pic