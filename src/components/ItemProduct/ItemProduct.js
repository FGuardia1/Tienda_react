import './ItemProduct.scss';
import ItemCount from '../ItemCount/ItemCount';
function ItemProduct({data}){
const {imagen,nombre,precio,stock}=data
   
   return(
<div >
<div className="card" style={{width: "15rem"}}>
  <img src={imagen} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text">${precio}</p>
   
    <ItemCount stock={stock} initial={1}/>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>
</div>

    )
}

export default ItemProduct