import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import ItemList from '../ItemList/ItemList'
import  {useParams} from 'react-router-dom'


function ItemListContainer(){

  const [listProducts,setListProducts]=useState([])
  const {categoryId}=useParams()


const filtrarXcategoria= products.filter((products)=>products.category==categoryId)


const getProducts= new Promise((resolve,reject)=>{
  setTimeout(() => {
if(categoryId!=null){
  resolve(filtrarXcategoria)
}else{
  resolve(products) 
}

   
  }, 2000);
})

useEffect(()=>{
  getProducts
  .then((res)=>{
  setListProducts(res)
  })
  .catch((error)=>{
  console.log("Ocurrio un error")
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