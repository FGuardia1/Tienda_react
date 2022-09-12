import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';

import {collection,getDocs} from 'firebase/firestore'
import db from '../../firebaseConfig'



function Navbar(){

  const [listCategories,setListCategories]=useState([])



const getCategories= async()=>{
  const categoryCollection=collection(db,"categories")
  const categorySnapShot=await getDocs(categoryCollection)
   const categoryList =categorySnapShot.docs.map((doc)=>{
                      let category=doc.data()
                      category.id=doc.id
                      return category
                      })

return categoryList
 }

useEffect(()=>{
  getCategories()
  .then((res)=>{
  setListCategories(res)
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
                                        <Link className="text-decoration-none" to='/products' ><p className="nav-link active" aria-current="page" >Productos</p></Link> 
                                        <li className="nav-item dropdown">
                                          <p className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              Categorias
                                          </p>
                                          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{margin: 0}}>
                                                  {listCategories.map((category,i)=>{
                                                    return(<Link key={i} className="text-decoration-none" to={`/category/${category.id}`} ><p className="dropdown-item" >{category.nombre}</p></Link> )
                                                  })}
                                          </div>
                                        </li>
                                        <Link className="text-decoration-none" to='/aboutUs' ><p className="nav-link active" aria-current="page" >Sobre nosotros</p></Link> 
                                </div> 
                                <CartWidget/>
                          </div>
                    </div>
              </nav>
        </div>
    )
}


export default Navbar