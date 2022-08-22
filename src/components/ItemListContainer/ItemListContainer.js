import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import ItemList from '../ItemList/ItemList'
import  {useParams} from 'react-router-dom'
import {collection,getDocs} from 'firebase/firestore'
import db from '../../firebaseConfig'
function ItemListContainer(){

  const [listProducts,setListProducts]=useState([])
  const {categoryId}=useParams()

  let productList;
const filtrarXcategoria=()=> {return productList.filter((products)=>products.category==categoryId)}


/* const getProducts= new Promise((resolve,reject)=>{
  setTimeout(() => {
if(categoryId!=null){
  resolve(filtrarXcategoria)
}else{
  resolve(products) 
}  
  }, 2000);
})
 */

const getProducts= async()=>{
const productCollection=collection(db,"productos")
const productSnapShot=await getDocs(productCollection)
 productList =productSnapShot.docs.map((doc)=>{
                    let product=doc.data()
                    product.id=doc.id
                    return product

                    })


                    if(categoryId!=null){
                      return(filtrarXcategoria())
                    }else{
                      return productList
                    }  




}


useEffect(()=>{
  getProducts()
  .then((res)=>{
setListProducts(res)

  })




},[listProducts,setListProducts,categoryId])

    return(
          <div>
            <div className="card-group mx-auto text-decoration-none">
              <ItemList dataProducts={listProducts}/>
            </div>
          </div>
    )
}

export default ItemListContainer