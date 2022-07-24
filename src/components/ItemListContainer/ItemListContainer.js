import './ItemListContainer.scss'
import ItemProduct from "../ItemProduct/ItemProduct"


function ItemListContainer({Titulo}){
const prod1={
  "id": 0,
  "nombre": "Mouse Redragon Griffin M607 RGB USB 7200DPI",
  "precio": 1730,
  "stock": 8,
  "imagen":"./assets/productsImages/Mouse.png"
}

const prod2={
  "id": 1,
    "nombre": "Memoria Patriot Viper Steel 8gb Ddr4 3200mhz",
    "precio": 4720,
    "stock": 10,
  "imagen":"./assets/productsImages/memoriaRam.png"
}
const prod3={
  "id": 2,
  "nombre": "Placa de Video Powercolor Radeon RX ",
  "precio": 35500,
  "stock": 5,
  "imagen":"./assets/productsImages/placaVideo.png"
}

    return(
<div>
  <h2 >{Titulo}</h2>

  <div className="card-group mx-auto">
    <ItemProduct data={prod1}/>   
    <ItemProduct data={prod2}/>
    <ItemProduct data={prod3}/>
    
  </div>
</div>




    )
}

export default ItemListContainer