import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import './NavBar.scss';

const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { cartProducts, clear,removeItem } = useContext(CartContext)


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
        <div className='cart-widget'>
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
                <button className="btn btn-danger" onClick={() => clear()}>Borrar todo</button>
            </Menu>
        </div>
    )
}

export default CartWidget