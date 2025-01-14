import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../component/Add'
import Category from '../component/Category'
import View from '../component/View'


const Home = () => {

    const [deleteResponseFromView,setDeleteResponseFromView] = useState("")
    const [deleteResponseFromCategory,setDeleteResponseFromCategory] = useState("")
    const [addResponseFromHome,setAddResponseFromHome] =useState("")
  return (
    <div style={{paddingTop:'20px'}}>
     <div className='row container-fluid my-2'>
       <Add setAddResponseFromHome={setAddResponseFromHome}/>
        <div className='col-lg-6 my-2'>
            <h3>All Products</h3>
            <View  deleteResponseFromCategory={deleteResponseFromCategory} setDeleteResponseFromView={setDeleteResponseFromView} addResponseFromHome={addResponseFromHome} />
        </div>
        <div className='col-lg-6'>
          <Category deleteResponseFromView={deleteResponseFromView}  setDeleteResponseFromCategory={setDeleteResponseFromCategory}  />
        </div>
      </div>

    </div>
  )
}

export default Home