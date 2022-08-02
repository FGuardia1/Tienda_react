import { useEffect, useState } from 'react'
import productDetail from '../../utils/productsDetail.mock'
import ItemDetail from '../ItemDetail/ItemDetail'
function ItemDetailContainer(){

  const [product,setProduct]=useState([])

const getItem= new Promise((resolve,reject)=>{
  setTimeout(() => {
   resolve(productDetail) 
  }, 2000);
})

useEffect(()=>{
  getItem
  .then((res)=>{
  setProduct(res)
  })
  .catch((error)=>{
  console.log("Ocurrio un error")
  })
},[])

    return(
          <div>        
             < ItemDetail data={product}/>
          </div>

    )
}

export default ItemDetailContainer