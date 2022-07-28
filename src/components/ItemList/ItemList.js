import ItemProduct from "../ItemProduct/ItemProduct"
const ItemList=({dataProducts})=>{

return (
    <>
    {dataProducts.map((prod)=> <ItemProduct key={prod.id} data={prod}/>)}   
    
    </>
)
}

export default ItemList