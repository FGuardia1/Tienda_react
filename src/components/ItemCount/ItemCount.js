import {useState,useContext} from "react"
import { CartContext } from "../../context/CartContext";
import './ItemCount.scss';

function ItemCount({stock,initial,setQuantitySelected,productData}){
    
const [cantidad,setCantidad]=useState(initial) 
const { addItem }=useContext(CartContext)

const removeQuantity=()=>{
    if(cantidad!=1){
   setCantidad(cantidad-1)     
    }
}
const addQuantity=()=>{
    if(cantidad==stock){
      
    }else{
    setCantidad(cantidad+1)    
    }  
}
const onAdd=()=>{
    if(addItem(productData,cantidad)){
        setQuantitySelected(cantidad)
    }
    
    
    
}


return(
    <div>

<div className="btn-group " role="group" aria-label="Basic example">
  <button type="button" className="btn btn-secondary" onClick={removeQuantity}>-</button>
  <p className="text-center cantidad ">{cantidad}</p>
  <button type="button" className="btn btn-secondary" onClick={addQuantity}>+</button>
  <button type="button" className="btn btn-primary " onClick={onAdd}>Agregar al carrito</button>
</div>

    </div>
)

}
export default ItemCount