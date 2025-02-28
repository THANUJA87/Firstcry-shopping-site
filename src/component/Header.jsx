import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
Form

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () =>{
     setShow(false);

  }
  const handleShow = () => setShow(true);
  const submit=()=>{
   
    alert("Thank You for contacting with us !!")


  }

  return (
      
     
        <Navbar bg="primary" variant="dark" expand="lg" className="py-2">
          <Container>
           <Link to={'/'} style={{textDecoration:'none'}}>
           <Navbar.Brand href="#home" className="d-flex align-items-center">
              <img
                src={logo}
                alt="Logo"
                style={{ width: '40px', height: 'auto' }}
               />
             <span> firstcry</span>
            </Navbar.Brand>
           </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto text-center text-lg-start">
                <Link className='text-white mx-2' to={'/home'} style={{textDecoration:'none'}}>Home</Link>
                <Link className='text-white mx-2' onClick={handleShow}  href="#"><i class="fa-solid fa-user"></i></Link>
                <Link className='text-white mx-2' to={'/cart'} style={{textDecoration:'none'}}><i class="fa-solid fa-cart-shopping fs-4"></i></Link>
               </Nav>
            </Navbar.Collapse>
          </Container>

            <Modal centered lg-6 show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Contact Us</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='border rounded p-3'>
                      <FloatingLabel  controlId="floatingname" label="Name"className="mb-3">
                      <Form.Control type="text" placeholder="username" />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingInput" label="Email address"className="mb-3">
                      <Form.Control type="email" placeholder="name@example.com" />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingPassword" label="Message">
                      <Form.Control type="text" placeholder="message" />
                      </FloatingLabel>
                    </div>
              </Modal.Body>
              <Modal.Footer>
                <Button className='text-center' variant="primary" onClick={submit}>
                 Submit
                 </Button>
              </Modal.Footer>
            </Modal>
        </Navbar>
    
           
         
     
  );
};

export default Header;