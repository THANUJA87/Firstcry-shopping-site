import { Container } from 'react-bootstrap';
import logo from '../assets/logo.png';


function Footer() {
  return (
    <footer className="bg-primary text-light py-3">
      <div className="d-flex flex-column flex-md-row justify-content-between px-3 px-md-5">
        {/* Intro */}
        <div style={{ width: '100%', maxWidth: '400px' }} className="mb-3 mt-3">
          <h5>
            <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} /> <span>firstcry</span>
          </h5>
          <p>Discover adorable outfits, safe toys, and essentials crafted with love for your bundle of joy.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>

        {/* Guides */}
        <div className="d-flex flex-column mb-3 mt-3">
          <h5>Category</h5>
          <a href="https://react.dev/" className="text-decoration-none text-light">Clothing & Fashion</a>
          <a href="https://getbootstrap.com/" className="text-decoration-none text-light">Toys</a>
          <a href="https://reactrouter.com/" className="text-decoration-none text-light">Baby Diapering</a>
          <a href="https://reactrouter.com/" className="text-decoration-none text-light">Bath & Skincare</a>
          <a href="https://reactrouter.com/" className="text-decoration-none text-light">Health & Saftey</a>
        </div>
        <div className="d-flex flex-column mb-3 mt-3">
          <h5>Shiping & Policies</h5>
          <a href="https://www.firstcry.com/payments" className="text-decoration-none text-light">Payments</a>
          <a href="https://www.firstcry.com/shippingpolicy" className="text-decoration-none text-light">Shipping Policy</a>
          <a href="https://www.firstcry.com/returnpolicy" className="text-decoration-none text-light">Return & Replacement Policy</a>
          <a href="https://www.firstcry.com/cancellation-terms" className="text-decoration-none text-light">Cancellation Policy</a>
          <a href="https://www.firstcry.com/termsofuse" className="text-decoration-none text-light">Terms of Use</a>
          <a href="https://www.firstcry.com/privacypolicy" className="text-decoration-none text-light">Privacy Policy</a>

        </div>

        {/* Contact */}
        <div className="d-flex flex-column mb-3 mt-3">
          <h5>Contact Us</h5>
          <div className="d-flex mb-2">
            <input type="text" placeholder="Enter your email here..." className="form-control me-2" />
            <button className="btn btn-light"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="d-flex justify-content-between">
            <a href="https://en.wikipedia.org/wiki/Twitter" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.call.com/" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      <Container className="text-center">
        &copy; 2025 BizLanding. All Rights Reserved.
        <a href="#home" className="text-light ms-2">
        </a>
      </Container>
    </footer>
  );
}

export default Footer;