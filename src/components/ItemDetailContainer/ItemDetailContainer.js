import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import  {useParams} from 'react-router-dom'
import db from '../../firebaseConfig'
import {doc,getDoc} from 'firebase/firestore'
function ItemDetailContainer(){

const [product,setProduct]=useState([])

const {id}=useParams()



useEffect(()=>{
  getProduct()
  .then((res)=>{
  setProduct(res)
  })
},[])


const getProduct= async()=>{

const docRef=doc(db,"productos",id)
const docSnapshot=await getDoc(docRef)
let product=docSnapshot.data()
product.id=docSnapshot.id
return product

}


    return(
          <div>        
             < ItemDetail data={product}/>
          </div>

    )
}

export default ItemDetailContainer