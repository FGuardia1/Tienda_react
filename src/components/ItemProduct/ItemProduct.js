import './ItemProduct.scss';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'
function ItemProduct({data}){
const {imagen,nombre,precio,stock,id}=data
   
   return( 
<div >
  <div className="card ms-3" style={{width: "15rem"}}>
    <Link className="text-decoration-none" to={`/item/${id}`} > 
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body" align="center">
      <h5 className="card-title ">{nombre}</h5>
      <p className="card-text">${precio}</p>
    </div>
    </Link> 
    <div className="card-body" align="center">
       <ItemCount stock={stock} initial={1}/>
      <p href="#" className="btn btn-primary ">Comprar</p>
    </div>   
  </div>
</div>
    )
}

export default ItemProduct