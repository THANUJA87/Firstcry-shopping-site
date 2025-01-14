import commonApi from "./commonApi"
import SERVERURL from "./serverUrl"


// save vedio Api - post http request, Add.jsx component

export const saveProductAPI = async (productDeatils) =>{
    return await commonApi(`POST`,`${SERVERURL}/uploadProducts`,productDeatils)
 
 }
 // getVediosAPI -GET method called by view component.
  export const getAllProductAPI = async() =>{
    return await commonApi(`GET`,`${SERVERURL}/uploadProducts`,"")
  }

  //saveCartAPI - post method to store  data in cart called by vediocard when click on cart icon
  export const saveCartAPI = async(cartDetails) =>{
    return await commonApi(`POST`,`${SERVERURL}/cart`,cartDetails)
  }
// getCartAPI - get method called by cart component when it open in browser
  export const getCartAPI = async() =>{
    return await commonApi(`GET`,`${SERVERURL}/cart`,"")
  }

// deleteCartAPI - delete method to delete data in cart by using the id

export const deleteCartAPI = async(id) =>{
  return await commonApi(`DELETE`,`${SERVERURL}/cart/${id}`,{})
}

// save categoryAPI - save data in category when click on add button

export const saveCategoryAPI = async (categoryDeatils) =>{
  return await commonApi(`POST`,`${SERVERURL}/category`,categoryDeatils)

}
  //getAllCategoryAPI - used to
export const getAllCategoryAPI = async() =>{
  return await commonApi(`GET`,`${SERVERURL}/category`,{})
}
// deleteCategoryAPI - to delete category by clicking trash button
export const deleteCategoryAPI = async(id) =>{
  return await commonApi(`DELETE`,`${SERVERURL}/category/${id}`,{})
}

// update category when image dragover category

export const updateCategoryAPI = async(categoryDetails) =>{
  return await commonApi(`PUT`,`${SERVERURL}/category/${categoryDetails.id}`,categoryDetails)
}
export const removeProductAPI = async(id) =>{
  return await commonApi(`DELETE`,`${SERVERURL}/uploadProducts/${id}`,{})
}


