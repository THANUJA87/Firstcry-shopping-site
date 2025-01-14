import React from 'react'
import { Card } from 'react-bootstrap'
import { removeProductAPI, saveCartAPI} from '../Services/allApi'


const ImageCard = ({displayData,insideCategory,setDeleteProductFromImagecard}) => {


  const addCart = async () =>{
       // store data to cart 
       const {name,imageUrl,price} = displayData
       const cartDetails = {name,imageUrl,price}
       if(cartDetails?.name){
        alert("Product already in cart ")
       }else{
       try {
           await saveCartAPI(cartDetails)
           alert("Product added to cart!!!")
        
       } catch (err) {
           console.log(err);
           
       } 
    }
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
    <Card draggable={true} onDragStart={e => imageCardDragStarted(e,displayData)}   style={{ width: '13rem' }} className='my-3'>
       <Card.Img height={'160px'} variant="top" src={displayData?.imageUrl} />
        <Card.Body>
          <Card.Text>
            <div className='d-flex justify-content-between'>
              <p className='text-center fw-bold'>{displayData?.name}</p>
              <p className='fw-bold'> ₹ {displayData?.price}</p>
            </div>
            <div className='d-flex justify-content-between' >
           
              { !insideCategory &&
                <button onClick={()=>deleteProduct(displayData?.id)}   className='btn'><i class="fa-solid fa-trash  text-danger "></i> </button>

              }            
              <button onClick={addCart} className='btn'><i class="fa-solid fa-cart-shopping  text-success "></i> </button>

             </div>
     
    
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default ImageCard