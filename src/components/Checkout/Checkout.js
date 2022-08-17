import {useContext} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import { Link}from 'react-router-dom'



const Checkout=()=>{
    const { cartProducts, clear,removeItem,totalCart,cantidadProducts } = useContext(CartContext)


    const borrar=(e)=>{
        e.preventDefault();
        const itemId=e.target.parentElement.parentElement.parentElement.getAttribute("data_id")
        removeItem(itemId)
      
    }

return(
<div className='container'>
{
    !cartProducts.length?<div>
       <h1>No hay items en el carrito</h1> 
        <button className="btn btn-primary"><Link className="text-decoration-none text-white" to='/'>Volver</Link></button>
        </div>:
<div>
     {cartProducts.map((product) => {
                    return(
                        <div className='item-cart-product' key={product.id} data_id={product.id}>
                            <img src={product.imagen} alt="" />
                            <div className='cart-product__details'>
                                <p>{product.nombre}</p>
                            </div>
                            <div className='cart-product__details'>
                                <p>$ {product.precio}</p>
                                <p>Cantidad {product.cantidad}</p>
                            </div>
                            <div  className='cart-product__action'>
                             <DeleteIcon onClick={borrar}/>  
                            </div>
                        </div>
                    )
                })}
                <p className='font-weight-bold'>Total: ${totalCart} </p>
                <button className="btn btn-danger" onClick={() => clear()}>Borrar todo</button>
    </div>
    }
 

</div>





   
)

 
}
export default Checkout