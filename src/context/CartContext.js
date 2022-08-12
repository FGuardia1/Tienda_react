import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

const isInCart=(id)=>{
    return cartProducts.find(prod => prod.id ==id)?true:false
}




const addItem = (product,cantidad) => {
    if(isInCart(product.id)){
        console.log("El producto se encuentra en el carrito de compras")
    }else{
        product['cantidad'] = cantidad
        setCartProducts([...cartProducts, product]) 
    }      
}
const removeItem = (itemId) => {
    setCartProducts(cartProducts.filter((producto) => producto.id != itemId)) ;
}


    const clear = () => {
        setCartProducts([])
    }
    const data = {
        cartProducts,
        setCartProducts,
        clear,
        addItem,
        removeItem
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }