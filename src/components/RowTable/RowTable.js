import DeleteIcon from '@mui/icons-material/Delete';
const RowTable=({product,accion})=>{
    return(
        <tr data_id={product.id}>
            <th className="d-none d-lg-block d-xl-block"scope="row"><img className="cart-img "src={product.imagen} alt="" /></th>
            <td className='fs-5'>{product.nombre}</td>
            <td className='fs-5'>${product.precio}</td>
            <td className='fs-5'>{product.cantidad}</td>
            <td><DeleteIcon fontSize='large' onClick={accion}/></td>                       
        </tr>                   
    )
    
}
export default RowTable