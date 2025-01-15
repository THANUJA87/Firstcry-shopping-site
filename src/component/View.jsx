import React, { useState } from 'react'
import ImageCard from './ImageCard'
import { Col, Row } from 'react-bootstrap'
import { getAllProductAPI, saveProductAPI, updateCategoryAPI } from '../Services/allApi'
import { useEffect } from 'react'



const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {

  const [deleteProductFromImagecard,setDeleteProductFromImagecard] = useState("")

  const [allProducts,setAllProduct] =useState([])

  useEffect(() =>{
    getAllProduct()
  
  },[addResponseFromHome,deleteProductFromImagecard,deleteResponseFromCategory])
 

  const getAllProduct = async()=>{
    try {
      const result = await getAllProductAPI()
      console.log(result);
      if(result.status >= 200 && result.status <300){
       setAllProduct(result.data);
      
     
         
      }else{
        console.log("Api call failed");
        
      }
      
    } catch (err) {
      console.log(err);
      
      
    }
  }

  const dragOverView = (e)=>{
    e.preventDefault()
  }

  const  categoryDragOverView =async (e)=>{
    console.log("inside categoryVideoDragOverView");
    const {product,categoryDetails} =JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(product,categoryDetails);
    const updatedCategoryProductList = categoryDetails?.allProducts?.filter(item=>item.id!= product?.id)
    const updateCategory ={...categoryDetails,allProducts:updatedCategoryProductList}
    console.log(updateCategory);
    
    // //updating the category by delete video from category
    const result = await updateCategoryAPI (updateCategory)
    // //use state lifting to communicate data from view to category
    setDeleteResponseFromView(result) 
    // //use api to upload video
    await saveProductAPI(product)
    // // call getAllvedio function
    getAllProduct()

  }

  return (
   <>
        <Row 
        droppable="true" 
        onDragOver={dragOverView} 
        onDrop={e => categoryDragOverView(e)} 
      
      >
        {
          allProducts?.length > 0 ? (
            allProducts.map(product => (
              <Col key={product?.id} xs={12} sm={6} md={4} lg={4} className='d-flex justify-content-center'>
                <ImageCard setDeleteProductFromImagecard={setDeleteProductFromImagecard} displayData={product} />
              </Col>
            ))
          ) : (
            <div className="fw-bolder text-danger text-center">
              No Product uploaded !!
            </div>
          )
        }
      </Row>


   </>
  )
}

export default View