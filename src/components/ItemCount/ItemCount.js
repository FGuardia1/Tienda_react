import {useState} from "react"
import './ItemCount.scss';

function ItemCount({stock,initial,setQuantitySelected}){
    
const [contador,setContador]=useState(initial) 
const removeQuantity=()=>{
    if(contador!=1){
   setContador(contador-1)     
    }
}
const addQuantity=()=>{
    if(contador==stock){
      
    }else{
    setContador(contador+1)    
    }  
}
const onAdd=()=>{
    setQuantitySelected(contador)
}


return(
    <div>

<div className="btn-group " role="group" aria-label="Basic example">
  <button type="button" className="btn btn-secondary" onClick={removeQuantity}>-</button>
  <p className="text-center cantidad ">{contador}</p>
  <button type="button" className="btn btn-secondary" onClick={addQuantity}>+</button>
  <button type="button" className="btn btn-primary " onClick={onAdd}>Agregar al carrito</button>
</div>

    </div>
)

}
export default ItemCount