import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteCartAPI, getCartAPI } from '../Services/allApi'


const Cart = () => {

  const [allCartProduct,setAllCartProduct] = useState([])


  useEffect(()=>{
    getAllCart()
  },[])
  
  const  removeCart = async (id) =>{
    try {
      await  deleteCartAPI(id)
      getAllCart()
      
    } catch (err) {
      console.log(err);
      
    }
  }

  const getAllCart = async  () =>{
    try {
     const result= await getCartAPI() 
     if(result.status >=200 && result.status < 300){
      setAllCartProduct(result.data)

     }else{
      console.log(result);
      
     }
     
      
    } catch (err) {
      console.log(err);
      
      
    }
  }
  return (
    <>
     <div style={{paddingTop:'30px'}}>
      <div className='d-flex justify-content-between container' >
        <h5><i class="fa-solid fa-bag-shopping"></i> Cart </h5>
       

      </div>
      <table className='container mb-5 mt-3 text-center' style={{ borderSpacing: '0 10px', borderCollapse: 'separate' }}>
        <thead>
          <tr>
            <th>#</th>
            <th> NAME</th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
         {
          allCartProduct?.length >0 ?
          allCartProduct.map((cartDetails,index)=>(
            <tr >
              <td>{index +1}</td>
              <td>{cartDetails.name}</td>
              <td> <img width={'100px'} height={'100px'} src={cartDetails.imageUrl} alt="" /></td>
              <td>{cartDetails.price}</td>
              <td><button onClick={()=>removeCart(cartDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>

           ))
          :
          <div className='text-danger fw-bolder'>No data</div>
          
         } 
        </tbody>
      </table>
    </div>

    
    </>
  )
}

export default Cart