import CarouselAd from "../components/CarouselAd/CarouselAd"
import BannerInfo from "../components/BannerInfo/BannerInfo"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
const Home=()=>{

    return(
<>
<CarouselAd/>
<BannerInfo/>

<h2 className="m-2">Productos destacados</h2>
<ItemListContainer/>

</>


    )
}

export default Home