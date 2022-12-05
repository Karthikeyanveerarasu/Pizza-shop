import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Cart = () => {
    const [show, setShow] = useState(false);
                var c=parseInt(localStorage.getItem('count'));
              //  console.log(c);
                var car=[];
                for(let i=1;i<=c;i++){
                  car.push(localStorage.getItem('item'+i));
                }
  return (
    <>
      <Button variant="danger" onClick={ ()=> setShow(!show)}>
      <i class="bi bi-cart3"></i> Cart
      </Button>
      <Offcanvas show={show} onHide={ ()=> setShow(!show)} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <div className='text-center display-5'>
              <h2>Happy Shopping :</h2>
            </div>
            <hr />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ol>
          {
            car.map(itt=>(
              <li class="h3" style={{fontFamily:"cursive",marginLeft:"25%"}}>{itt}</li>
            ))
          }
          </ol>
        </Offcanvas.Body>
        <div className='text-center'>
        <Button variant="danger"> <span>BUY NOW <i class="bi bi-bag"></i> </span></Button>
        </div> 
        
      </Offcanvas>
      
    </>
  )
}

export default Cart