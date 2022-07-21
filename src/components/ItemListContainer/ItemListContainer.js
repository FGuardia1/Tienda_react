import ItemProduct from "../ItemProduct/ItemProduct"


function ItemListContainer({Titulo}){
    return(
<div>
  <h2>{Titulo}</h2>

  <div className="card-group">
   
    <ItemProduct imagen="./assets/productsImages/Mouse.png" nombre="Mouse Redragon Griffin M607 RGB USB 7200DPI" precio={2100}/>   
    <ItemProduct imagen="./assets/productsImages/memoriaRam.png" nombre="Memoria Patriot Viper Steel 8gb Ddr4 3200mhz" precio={5200}/>
    <ItemProduct imagen="./assets/productsImages/placaVideo.png" nombre="Placa de Video Powercolor Radeon RX 550 " precio={36200}/>
    
  </div>
</div>




    )
}

export default ItemListContainer