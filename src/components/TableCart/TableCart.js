import RowTable from "../RowTable/RowTable"
const TableCart=({ListProducts,accionBorrar})=>{


return(
<>
<table className="table table-striped">
  <thead>
    <tr>
      <th className="d-none d-lg-block d-xl-block"scope="col">Imagen</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Borrar</th>
    </tr>
  </thead>
  <tbody>
 {ListProducts.map((product) => <RowTable key={product.id} product={product} accion={accionBorrar}  /> )} 
  </tbody>
</table>
</>
)
}
export default TableCart