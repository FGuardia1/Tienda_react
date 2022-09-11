import './ItemProduct.scss';
import {Link} from 'react-router-dom'
import {useContext,useState} from "react"
import { CartContext } from "../../context/CartContext";

function ItemProduct({data}){
const {imagen,nombre,precio,id}=data
const { addItem }=useContext(CartContext)
const [agregadoCarrito, setAgregadoCarrito] = useState(false)
const onAdd=()=>{
  if(addItem(data,1)){
    setAgregadoCarrito(true)
  }   
}


   return( 
<div >
  <div className="card ms-3" style={{width: "15rem"}}>
    <Link className="text-decoration-none" to={`/item/${id}`} > 
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body" align="center">
      <h5 className="card-title ">{nombre}</h5>
      <p className="h4">${precio}</p>
    </div>
    </Link> 
    <div className="card-body" align="center">
   {agregadoCarrito?<button type="button" className="btn btn-secondary" disabled>Agregado!</button>:<button type="button" className="btn btn-primary " onClick={onAdd}>Agregar al carrito</button>}
    </div>   
  </div>
</div>
    )
}

export default ItemProduct