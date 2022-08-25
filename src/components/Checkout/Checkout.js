import {useContext,useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import { Link}from 'react-router-dom'
import Modal from '../Modal/Modal';
import db from '../../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'

const Checkout=()=>{
    const { cartProducts, clear,removeItem,totalCart } = useContext(CartContext)

    const [showModal, setShowModal] = useState(false)
   
    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.nombre,
                price: product.precio
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalCart
    })

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email:''
    })


 const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        
    }

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
                <button className="btn btn-success" onClick={() => setShowModal(true)}>Pagar</button>

                {showModal && 
                    <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
                        {success ? (
                            <>
                               <h2>Su orden se genero correctamente</h2>
                               <p>ID de compra : {success}</p>
                            </>
                        ) : (
                            <form onSubmit={submitData}>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Ingrese el nombre'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input 
                                    type='number' 
                                    name='phone' 
                                    placeholder='Ingrese el telefono' 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Ingrese el mail'
                                    value={formData.email}
                                    onChange={handleChange}

                                />
                                <button className="btn btn-success" type="submit">Finalizar compra</button>
                            </form>
                        )}
                    </Modal>
                }





    </div>
    



    }





</div>





   
)

 
}
export default Checkout