import React,{useState} from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { saveProductAPI } from '../Services/allApi';



const Add = ({setAddResponseFromHome}) => {

  const [productDetails, setProductDetails] = useState({
    name:"", imageUrl:"",description:"", price:""
  })
  console.log(productDetails);
  


  const handleUploadProduct = async () =>{
    //object destructuring
    const {name, imageUrl, price} =productDetails
    if(name && imageUrl && price){
     try {
      const result = await saveProductAPI(productDetails)
      console.log(result);
      if(result.status >= 200 && result.status <300){
        alert("Product Added Successfully")
        handleClose()
        // pass the result to view component
        setAddResponseFromHome(result)
      }else{
        console.log(result);
        
      }
      
     } catch (err) {
      console.log(err);
      
     }
      

    }else{
      alert("Please fill the form !!!")
    }

  }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   <>
   <div className="d-flex justify-content-start">
  <button onClick={handleShow} className="btn btn-primary rounded-circle">
    +
  </button>
</div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products ! ! !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel controlId="floatingName" label="Product Name">
              <Form.Control
                onChange={(e) =>
                  setProductDetails({ ...productDetails, name: e.target.value })
                }
                type="text"
                placeholder="Product Name"
              />
            </FloatingLabel>
            <FloatingLabel className="mt-3" controlId="floatingimageUrl" label="Image URL">
              <Form.Control
                onChange={(e) =>
                  setProductDetails({ ...productDetails, imageUrl: e.target.value })
                }
                type="text"
                placeholder="Image URL"
              />
               <FloatingLabel className="mt-3" controlId="floatingprice" label="Product Description">
              <Form.Control
                onChange={(e) =>
                  setProductDetails({ ...productDetails, description: e.target.value })
                }
                type="text"
                placeholder="Price"
              />
            </FloatingLabel>
            </FloatingLabel>
            <FloatingLabel className="mt-3" controlId="floatingprice" label="Product Price">
              <Form.Control
                onChange={(e) =>
                  setProductDetails({ ...productDetails, price: e.target.value })
                }
                type="number"
                placeholder="Price"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadProduct} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>

   </>
  )
}

export default Add