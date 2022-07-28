import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import ItemProduct from "../ItemProduct/ItemProduct"
import products from '../../utils/products.mock'
import ItemList from '../ItemList/ItemList'
function ItemListContainer({Titulo}){
const [listProducts,setListProducts]=useState([])
const getProducts= new Promise((resolve,reject)=>{
  setTimeout(() => {
   resolve(products) 
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

},[])



    return(
          <div>
            <h2 >{Titulo}</h2>

            <div className="card-group mx-auto">
              <ItemList dataProducts={listProducts}/>
            </div>
          </div>

    )
}

export default ItemListContainer