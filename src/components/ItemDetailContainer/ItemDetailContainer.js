import { useEffect, useState } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../utils/products.mock'
import  {useParams} from 'react-router-dom'

function ItemDetailContainer(){

  const [product,setProduct]=useState([])

const {id}=useParams()

const getItem= new Promise((resolve,reject)=>{
  setTimeout(() => {
products.some((prod)=>{
  if (prod.id==id){
    resolve(prod) 
  }
}) 
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