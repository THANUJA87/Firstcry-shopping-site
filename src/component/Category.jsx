import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import ImageCard from './ImageCard';
import { deleteCategoryAPI, getAllCategoryAPI, removeProductAPI , saveCategoryAPI, updateCategoryAPI } from '../Services/allApi';


const Category = ({setDeleteResponseFromCategory,deleteResponseFromView}) => {
  const [categoryName,setCategoryName] = useState("")
  const [allCategory,setAllCategory] = useState("")
  useEffect(()=>{
    getAllCategory()
  },[deleteResponseFromView])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    const handleSaveCategory = async()=>{
      if(categoryName){
        const categorydetails = {categoryName,allProducts:[]}
        try {
          const result = await saveCategoryAPI(categorydetails)
          alert("Favourite added")
      
          getAllCategory()
          handleClose()
        } catch (err) {
          console.log(err);
          
        }
  
      }else{
        alert("please provide category name!!")
      }
    }

    const getAllCategory = async ()=>{
      try {
        const result =  await getAllCategoryAPI()
        if(result.status >=200 && result.status < 300 )
          setAllCategory(result.data)
        
      } catch (err) {
        console.log(err);
        
        
      }

    }

    console.log(allCategory);

    const removeCategory =async (id) =>{
      try {
        await deleteCategoryAPI(id)
        getAllCategory()
        
      } catch (err) {
        console.log(err);
        
      }
    }

    const dargOverCategory = (e)=>{
      e.preventDefault()
    }

    const imageCardDropOverCategory = async (e,categorydetails)=>{
      console.log("starting drop to category with id");
      // console.log(categorydetails);
      const imageDetails = JSON.parse(e.dataTransfer.getData("imageDetails"))
      console.log(imageDetails);

      categorydetails.allProducts.push(imageDetails)
      console.log(categorydetails);

     
        await updateCategoryAPI(categorydetails)
        getAllCategory()
        const result = await removeProductAPI (imageDetails?.id)
        setDeleteResponseFromCategory(result)
        // getAllProduct()
      }

    const categoryProductDragStarted =(e,dragProductDetails,categoryDetails) =>{
      console.log("inside categoryVedioDragstarted");
      let dragData ={product:dragProductDetails ,categoryDetails}
      e.dataTransfer.setData("dragData",JSON.stringify(dragData))
    }


  

  return (
   <>
   
     <div className='  '>
    
        <button onClick={handleShow}  className='btn btn-primary  fw-bolder ms-3 fs-5 mb-3'>Favourites +</button>
      </div>

     <div className=' container-fluid mb-3 '>  

       {
        allCategory?.length >0 ?

          allCategory?.map(categorydetails => (
            <div droppable="true" onDragOver={dargOverCategory} onDrop={e=>imageCardDropOverCategory(e,categorydetails)} key={categorydetails?.id} className='border rounded p-3 mb-3'>
            <div className='d-flex justify-content-between'>
              <h5>{categorydetails?.categoryName} </h5>
              <button onClick={() => removeCategory(categorydetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i> </button>

            </div>
            <div className='row mt-2 '>
             {
              categorydetails?.allProducts?.length >0 &&
              categorydetails?.allProducts?.map(product =>(
                <div key={product?.id} className='col-lg-4 ms-3' draggable={true}
                onDragStart={e=> categoryProductDragStarted(e,product,categorydetails)}>
                     <ImageCard  insideCategory ={true}  displayData={product} />
                </div> 
              ))
             }

            </div>
            
            
          </div>
          ))
        
        :
        <div className='fw-bolder text-danger fs-5'>No Favourites are added yet !!!</div>
       }
    </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Favourite Products ! ! !</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
            <FloatingLabel controlId="floatingName" label="Category Name">
            <Form.Control onChange={e=>setCategoryName(e.target.value)}  type="text" placeholder="Category Name" />
            </FloatingLabel>
          </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary" >Add</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Category