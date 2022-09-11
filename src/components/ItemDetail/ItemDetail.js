import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount';
import {useState} from "react"
import { Link}from 'react-router-dom'
function ItemDetail({data}){
const {id,imagen,nombre,precio,stock,categoryName}=data
   
const [quantitySelected,setQuantitySelected]=useState(0)



   return(

<div className="container">
    <div className="card">
        <div className="card-body ">
            <h3 className="card-title">{nombre}</h3>
            <div className="row">
                <div className="col-lg-5 col-md-7">
                    <img src={imagen} className="img-fluid rounded-5 ass"/>
                </div>
                <div className="col-lg-7 col-md-5 ">
                    <h4 className="box-title mt-5">Descripcion de Producto</h4>
                    <p className="h6 mt-2">Hay STOCK disponible</p>
                    <p className='h6'>Codigo: {id}</p>
                    <p className='h5'>Categoria: {categoryName}</p>
                    <h2 className="m-3">
                       ${precio}
                    </h2>
                    
                    {  
                      quantitySelected>0?<button className="btn btn-primary"><Link className="text-decoration-none text-white" to='/cart'>Comprar</Link></button>:<ItemCount  stock={stock} initial={1} setQuantitySelected={setQuantitySelected} productData={data} />
                    }
                    
                </div> 
            </div>
        </div>
    </div>
</div>

    )
}

export default ItemDetail