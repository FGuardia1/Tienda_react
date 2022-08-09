import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount';
import {useState} from "react"
import { Link}from 'react-router-dom'
function ItemDetail({data}){
const {id,imagen,nombre,precio,stock,category}=data
   
const [quantitySelected,setQuantitySelected]=useState(1)



   return(

<div className="container">
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{nombre}</h3>
            <div className="row">
                <div className="col-lg-6 col-md-7 ">
                    <img src={imagen} className="img-responsive"/>
                </div>
                <div className="col-lg-6 col-md-5 ">
                    <h4 className="box-title mt-5">Descripcion de Producto</h4>
                    <p className="mt-4">Hay STOCK disponible</p>
                    <p>Codigo: {id}</p>
                    <h2 className="mt-5">
                       ${precio}
                    </h2>
                    
                    {  
                      quantitySelected>1?<button className="btn btn-primary "><Link className="text-decoration-none text-white" to='/cart'>Comprar</Link></button>:<ItemCount  stock={stock} initial={1} setQuantitySelected={setQuantitySelected}/>
                    }
                    
                </div> 
            </div>
        </div>
    </div>
</div>

    )
}

export default ItemDetail