import {useState} from "react"
import './ItemCount.scss';

function ItemCount({stock,initial}){
    
const [contador,setContador]=useState(initial) 
const onSubtract=()=>{
    if(contador!=1){
   setContador(contador-1)     
    }else{
        console.log("No puede disminuir la cantidad")
    }
}
const onAdd=()=>{
    if(contador==stock){
        console.log("El stock no cubre lo pedido")
    }else{
    setContador(contador+1)    
    }  
}
return(
    <div>

<div className="btn-group " role="group" aria-label="Basic example">
  <button type="button" className="btn btn-secondary" onClick={onSubtract}>-</button>
  <p className="text-center cantidad ">{contador}</p>
  <button type="button" className="btn btn-secondary" onClick={onAdd}>+</button>
</div>
    </div>
)

}
export default ItemCount