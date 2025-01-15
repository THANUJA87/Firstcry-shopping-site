import React from 'react'
import { Container,Card, Carousel, Col, Row } from 'react-bootstrap'
import '../style/landing.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import booties from '../assets/Booties.jpg'
import hair from '../assets/hairbands.jpg'
import slips from '../assets/slips.jpg'
import watch from '../assets/watches.jpg'
import glass from '../assets/glass.jpg'
import vests from '../assets/vests.jpg'
import fig1 from '../assets/fig1.jpg'
import fig2 from '../assets/fig2.jpeg'
import fig3 from '../assets/fig3.jpg'




const Landing = () => {
  return (
  <>
    <div className='landing'>
        <Container className="text-center py-5">
          <img width={'100px'} src={logo} alt="" />
          <h1 className='hero-head text-primary' style={{ fontSize: '3rem', fontWeight: 'bold' }}><span>firstcry</span></h1>
          <p className='hero-title text-dark' style={{ fontSize: '1.5rem', marginTop: '1rem' }}> Discover adorable outfits, safe toys, and essentials crafted with love for your bundle of joy.</p>
          <Link to={'/home'} className='btn btn-primary'> Get Started</Link>
        
        </Container>
      </div>
      <div className='container mt-5 text-center'>
     
       <div className='container  ' > 
          <h3 className='text-center fs-2 text-bold mb-5'>ESSENTIAL STORE</h3>
          <Row className=' mt-4' >
          <Col xs={12} sm={6} md={6} lg={4} className="mb-4">
            <Card className="h-100 d-flex justify-content-center" style={{ width: '18rem'}}>
              <Card.Img variant="top" src={booties} style={{height:'350px'}}  />
  
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4} className="mb-4">
            <Card className="h-100" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={hair} style={{height:'350px'}} />
             
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4} className="mb-4">
            <Card className="h-100" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={slips} style={{height:'350px'}} />
            
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4} className="mb-4">
            <Card className="h-100" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={watch}  style={{height:'350px'}}/>
         
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4} className="mb-4">
            <Card className="h-100" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={glass} style={{height:'350px'}} />
           
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4} className="mb-4">
            <Card className="h-100" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={vests} style={{height:'350px'}}/>
      
            </Card>
          </Col>
        </Row>
       </div>
         <Container>
          <h3 className='text-center text-primary fs-1 mb-4'><span>GET READY FOR <br /> A MAGICAL TIME</span> </h3>
        <Carousel>
          <Carousel.Item>
            <div className="text-center">
              <img
                src={fig1}
                alt="Client 1"
                className="img-fluid rounded"
                style={{ maxHeight: '450px', width: '80%' }}
              />
              <p className="mt-3">"Amazing products for babies!."</p>
              <h5 className='mb-5'>Parent's Choice</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img
                src={fig2}
                alt="Client 2"
                className="img-fluid rounded"
                style={{ maxHeight: '450px', width: '80%'  }}
              />
              <p className="mt-3">"Amazing products for babies!"</p>
              <h5 className='mb-5'>Parent's Choice</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img
                src={fig3}
                alt="Client 3"
                className="img-fluid rounded"
                style={{ maxHeight: '450px', width: '80%' }}
              />
              <p className="mt-3">"Amazing products for babies!."</p>
              <h5 className='mb-5'>Parent's Choice</h5>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>

        
      </div>
  </>

    
  
  )
}

export default Landing