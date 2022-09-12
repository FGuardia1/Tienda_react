import {useContext,useState} from 'react'
import { CartContext } from '../../context/CartContext';
import { Link}from 'react-router-dom'
import Modal from '../Modal/Modal';
import db from '../../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'
import "./Checkout.scss"
import TableCart from '../TableCart/TableCart';
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
        clear()
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)   
    }

    const cerrarModal=()=>{
        setShowModal()
        if(success){    
            setSuccess()
        }
    }


    const borrar=(e)=>{
        e.preventDefault();
        const itemId=e.target.parentElement.parentElement.parentElement.getAttribute("data_id")
       removeItem(itemId)   
    }

    return(
                <div className='container'>
                    {
                        !cartProducts.length&&!success?
                            <div>
                                <h1>No hay items en el carrito</h1> 
                                <button className="btn btn-primary"><Link className="text-decoration-none text-white" to='/'>Volver</Link></button>
                            </div>
                        :
                            <div>
                                <TableCart ListProducts={cartProducts} accionBorrar={borrar}/>
                                
                                <p className='h3'>Total: ${totalCart} </p>
                                <button className="btn btn-outline-danger btn-lg m-2 " onClick={() => clear()}>Borrar todo</button>
                                <button className="btn btn-outline-primary btn-lg" onClick={() => setShowModal(true)}>Ingresar datos</button>

                                {showModal && 
                                    <Modal title="DATOS DE CONTACTO" close={() => cerrarModal()}>
                                        {success ?
                                                 (
                                                    <>
                                                    <h2>Su orden se genero correctamente</h2>
                                                    <p className='h4'>ID de compra : {success}</p>
                                                    </>
                                                ) 
                                                : 
                                                (  
                                                    <form onSubmit={submitData}>
                                                        <div className='form-row align-items-center '>
                                                            <div className="col-md-7 m-2" >
                                                                <input 
                                                                        type='text' 
                                                                        name='name' 
                                                                        placeholder='Ingrese el nombre'
                                                                        onChange={handleChange}
                                                                        value={formData.name}
                                                                    />
                                                            </div>
                                                            <div className="col-md-7 m-2">
                                                                <input 
                                                                        type='number' 
                                                                        name='phone' 
                                                                        placeholder='Ingrese el telefono' 
                                                                        value={formData.phone}
                                                                        onChange={handleChange}
                                                                    />
                                                            </div>
                                                            <div className="col-md-7 m-2">
                                                                <input 
                                                                        type='email' 
                                                                        name='email' 
                                                                        placeholder='Ingrese el mail'
                                                                        value={formData.email}
                                                                        onChange={handleChange}
                                                                    /> 
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-success m-3" type="submit">Finalizar compra</button>
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