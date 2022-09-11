
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const CarouselAd=()=>{

return(<>

<Carousel>
            <div>
                <img src="..\assets\carouselImages\carrousel1.png" alt=".." />
               
            </div>
            <div>
                <img src="..\assets\carouselImages\carrousel2.png"  alt=".."/>
               
            </div>
            <div>
                <img src="..\assets\carouselImages\carrousel3.png" alt="..." />
              
            </div>
        </Carousel>



</>)

}
export default CarouselAd