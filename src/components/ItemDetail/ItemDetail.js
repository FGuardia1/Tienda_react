import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({data}){
const {id,imagen,nombre,precio,stock,category}=data
   
   return(
<div >
    
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
                    <div className='row'>
                        <div className="col-lg-6">
                           <ItemCount  stock={stock} initial={1}/> 
                        </div>
                    <button className="btn btn-primary btn-rounded col-lg-6">Comprar</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div>
</div>
    )
}

export default ItemDetail