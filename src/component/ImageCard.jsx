import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeProductAPI, saveCartAPI} from '../Services/allApi'
Modal


const ImageCard = ({displayData,insideCategory,setDeleteProductFromImagecard}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };


 
  let cart = [];
  const addCart = async () => {
    const { id, name, imageUrl, price } = displayData; // Include `id` from displayData
    const cartDetails = { id, name, imageUrl, price }; // Ensure `id` is part of cartDetails for checking

    // Check if the product is already in the cart
    const isProductInCart = allCart.some(item => item.id === cartDetails.id);

    if (isProductInCart) {
        alert("Product already in cart");
    } else {
        try {
            await saveCartAPI(cartDetails); // Add product to cart via API
            cart.push(cartDetails); // Add to local cart array (optional, update state as needed)
            alert("Product added to cart!!!");
        } catch (err) {
            console.log(err);
        }
    }
};

  const heart =async ()=>{
    
  }

  const deleteProduct = async (id)=>{
    try {
      const result = await removeProductAPI(id)
      setDeleteProductFromImagecard(result)
    } catch (err) {
      console.log(err);
      
    }

  }

 


  const imageCardDragStarted = (e,dragVedioDetails) =>{
     console.log("inside ImageCardDragStarted with id" + dragVedioDetails?.id);
     // share data using event drag
     e.dataTransfer.setData("imageDetails",JSON.stringify(dragVedioDetails))
  }

  return (
         <>
            <Card 
            draggable={true} 
            onDragStart={e => imageCardDragStarted(e, displayData)} 
            style={{ width: '13rem' }} 
            className="my-3"
          >
            <Card.Img 
            onClick={handleShow}
              height={'160px' }
              variant="top" 
              src={displayData?.imageUrl} 
             
            />
            <Card.Body>
              <Card.Text>
                <div className="d-flex justify-content-between">
                  <p className="text-center fw-bold mb-1">{displayData?.name}</p>
                  <p className="fw-bold mb-1">₹ {displayData?.price}</p>
                </div>
                <div className="d-flex justify-content-between">
                  { !insideCategory && (
                    <button 
                      onClick={() => deleteProduct(displayData?.id)} 
                      className="btn p-0"
                    >
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  )}
                  { insideCategory &&
                  <a onClick={toggleFavorite}  style={{ cursor: 'pointer',border: 'none' }}  className='btn btn-white  fs-5' target='_blank'> <i   className={`fa-heart ${isFavorited ? 'fa-solid text-danger' : 'fa-regular'}`} ></i></a>

                   }
                  <button onClick={addCart} className="btn p-0">
                    <i className="fa-solid fa-cart-shopping text-success"></i>
                  </button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
  
          <Modal size='lg' centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='row'>
              <div className='col-lg-6'>
                <img width={'350px'} height={'300px'} src= {displayData?.imageUrl} alt="" />
  
              </div>
              <div className='col-lg-6 gap-3'>
                  <h3> Product Details !!</h3>
                  <h6 className=' fw-bolder mt-3'> Product Name : {displayData?.name} </h6>
                  <h6 className='fw-bolder mt-2'> Price : ₹ {displayData?.price} </h6>
                  <h6 className='fw-bolder mt-2'> Description:  {displayData?.description} </h6>
                  <div className='mt-2 float-start' >
                  <a  onClick={addCart}  className='btn btn-white ms-2' target='_blank'><i className="fa-solid fa-cart-shopping text-success"></i></a>
            
                  <a onClick={toggleFavorite}  style={{ cursor: 'pointer',border: 'none' }}  className='btn btn-white ms-2 fs-5' target='_blank'> <i   className={`fa-heart ${isFavorited ? 'fa-solid text-danger' : 'fa-regular'}`} ></i></a>
            
              </div>

                </div>
            </div>
  
        
          </Modal.Body>
  
          </Modal>
  
         </>
  
  )
}

export default ImageCard