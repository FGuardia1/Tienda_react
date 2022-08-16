import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    const [cantidadProducts, setCantidadProducts] = useState(0)

const isInCart=(id)=>{
    return cartProducts.find(prod => prod.id ==id)?true:false
}


const addItem = (product,cantidad) => {
    if(isInCart(product.id)){
        return false
    }else{
        product['cantidad'] = cantidad
        setCartProducts([...cartProducts, product])
        setTotalCart(totalCart+product.precio * product.cantidad)
        setCantidadProducts(cantidadProducts+cantidad)
        return true
    }      
}
const removeItem = (itemId) => {

   let product=cartProducts.find(prod=>prod.id==itemId)
   setTotalCart(totalCart-product.precio*product.cantidad)
   setCantidadProducts(cantidadProducts-product.cantidad)
    setCartProducts(cartProducts.filter((producto) => producto.id != itemId)) ;
}

 const clear = () => {
        setCartProducts([])
        setTotalCart(0)
        setCantidadProducts(0)
    }



    const data = {
        cartProducts,
        setCartProducts,
        clear,
        addItem,
        removeItem,
        cantidadProducts,
        totalCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }