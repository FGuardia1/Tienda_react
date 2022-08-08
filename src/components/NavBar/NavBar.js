import CartWidget from "../CartWidget/CartWidget"
import categories from "../../utils/categories.mock"
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
function Navbar(){

  const [listCategories,setListCategories]=useState([])


const getCategories= new Promise((resolve,reject)=>{
  resolve(categories) 
})

useEffect(()=>{
  getCategories
  .then((res)=>{
  setListCategories(res)
  })
  .catch((error)=>{
  console.log("Ocurrio un error")
  })
},[])

    return(
        <div>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="text-decoration-none" to='/' ><p className="navbar-brand" >Tienda Tech</p></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link className="text-decoration-none" to='/' ><p className="nav-link active" aria-current="page" >Inicio</p></Link> 
        <a className="nav-link" href="#">Productos</a>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {listCategories.map((category,i)=>{
            return(<Link key={i} className="text-decoration-none" to={`/category/${category.id}`} ><p className="dropdown-item" >{category.nombre}</p></Link> )
          })}
        </div>
      </li>
        <a className="nav-link" href="#">Sobre nosotros</a>
       <CartWidget/>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}


export default Navbar