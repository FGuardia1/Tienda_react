import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import './CartWidget.scss';
import {Link} from 'react-router-dom'


const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { cartProducts, clear,removeItem,totalCart,cantidadProducts } = useContext(CartContext)

const borrar=(e)=>{
    e.preventDefault();
    const itemId=e.target.parentElement.parentElement.parentElement.getAttribute("data_id")
    removeItem(itemId)
}

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className=' cart-widget'>
                {cartProducts.length!==0&& <p className='cantidad-cart'>{cantidadProducts} </p>}
                    <ShoppingCartIcon 
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                            <Link className="text-decoration-none" to='/cart' ><button type="button" className="btn btn-primary m-2">Ir a checkOut</button></Link>   
                            
                                {cartProducts.map((product) => {
                                    return(
                                            <div className='item-cart-product' key={product.id} data_id={product.id}>
                                                    <img className="d-none d-lg-block d-xl-block" src={product.imagen} alt="" />
                                                    <p className='cart-product__details width_50 bg-light '>{product.nombre}</p>
                                                    <p className='cart-product__details width_25'>$ {product.precio}</p>
                                                    <p className='cart-product__details bg-light width_25'>{product.cantidad} u.</p>
                                                    <div  className='cart-product__action'>
                                                        <DeleteIcon onClick={borrar}/>  
                                                    </div>
                                            </div>
                                    )
                                })}
                                
                            <p className="h4">Total: ${totalCart} </p>
                            <button className="btn btn-danger m-2" onClick={() => clear()}>Borrar todo</button>
                    </Menu>
        </div>
    )
}

export default CartWidget