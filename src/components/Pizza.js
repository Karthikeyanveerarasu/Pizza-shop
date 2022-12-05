import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './Pizza.css'

const Pizza = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h2 className=' fst-bold' style={{color: "red"}}><span> <i class="bi bi-yelp"></i>Pizza Hut</span></h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p class="h3">{localStorage.getItem('item')}</p>
          <p>
            Your Item is Successfully Added to Your Cart !
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
    <Card className='m-3'>
      <Card.Img variant="top" src={props.img}className='img'/>
      <Card.Body>
      <div className='text-center'>
        <Card.Title> <h3 className='fst-bold'>{props.title}</h3></Card.Title>
        <p style={{color:"red",fontFamily:"cursive"}}><span><i class="bi bi-currency-rupee"></i></span> <span style={{textDecorationLine:"line-through"}}>{props.old}</span> - {props.new} Only</p>
        </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'>
        <Button variant="danger" onClick={()=>{
          localStorage.setItem('count',(parseInt(localStorage.getItem('count'))+1));
          localStorage.setItem('item'+(localStorage.getItem('count')),props.title);
          localStorage.setItem('item',props.title);
          setModalShow(true)}}>ADD TO CART</Button>
        </div>
      </Card.Body>
    </Card>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default Pizza