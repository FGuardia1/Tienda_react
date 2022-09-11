import PhoneIcon from '@mui/icons-material/Phone';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EmailIcon from '@mui/icons-material/Email';
import CreditCardIcon from '@mui/icons-material/CreditCard';
const BannerInfo=()=>{

return(

<>
<div className="container-fluid bg-light">
    <div className="row mb-20">
        <div className="col-md-3 col-sm-6 text-center">
        
            <h3><PhoneIcon  fontSize="large"/><b>VENTA TELEFÓNICA</b></h3>
            <p>(011) 7700-0048</p>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
            <h3><ScheduleIcon fontSize="large"/> <b>HORARIOS</b></h3>
            <p>Lunes a viernes de 8:30hs a 18:00 hs.
            Sábados de 10 a 13 hs.</p>
        </div>
        
        <div className="col-md-3 col-sm-6 text-center">
            <h3><EmailIcon fontSize="large"/> <b>ESCRIBINOS</b></h3>
            <p>TiendaTech@gmail.com</p>
        </div>
        <div className="col-md-3 col-sm-6 text-center">
           <div>
            <h3><CreditCardIcon fontSize="large"/> <b>3 CUOTAS SIN INTERES</b></h3>
                <p>Consultá los medios de pagos</p>
           </div>
        </div>
    </div>
</div>


</>

)

}
export default BannerInfo