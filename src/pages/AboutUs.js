

const AboutUs=()=>{

return(

    <div className="column">
    <div className="historia">
      <div className="parrafo">
        <h1 className="parrafo__titulo">Historia de la empresa</h1>
        <p className="parrafo__texto">
          Iniciamos nuestras actividades en el año 2012, fundada por 3
          emprendedores argentinos. El primer comercio se estableció en la
          localidad de San justo, Partido de La Matanza en Buenos Aires y la
          actividad principal era el soporte técnico informático. El negocio
          funcionaba como un taller de reparación, brindando servicios en las
          zonas aledañas, pero con el tiempo fue creciendo y comenzó a
          diversificarse, incorporando todo tipo de hardware para PC. Se
          crearon también cuentas en MercadoLibre y Facebook, seguidas de una
          página web, lo que permitió que la empresa se acerque más a sus
          clientes y promocione sus productos y servicios en Internet. En el
          año 2015 dio su paso más grande al abrir su segunda sucursal en
          Capital Federal, ubicada en once. Este nuevo proyecto ponía en
          funcionamiento un local varias veces más grande que el anterior,
          acercando a muchos potenciales nuevos clientes.
        </p>
      </div>
    </div>
    <div className="fundadores">
      <h2>Fundadores</h2>
      <div className="fila fila--wrap">
        <div className="fundador">
          <img
            className="fundador__foto"
            src="../assets/founders/Emanuel_Gimenez.jpg"
            alt=""
          />
          <div className="fundador__nombre">Emanuel Gimenez</div>
        </div>
        <div className="fundador">
          <img
            className="fundador__foto"
            src="../assets/founders/Miguel_Gonzalez.jpg"
            alt=""
          />
          <div className="fundador__nombre">Miguel Gonzalez</div>
        </div>
        <div className="fundador">
          <img
            className="fundador__foto"
            src="../assets/founders/Alberto_Dera.jpg"
            alt=""
          />
          <div className="fundador__nombre">Alberto Dera</div>
        </div>
      </div>
    </div>
    <div className="mision">
      <div className="parrafo">
        <h2 className="parrafo__titulo">Nuestra Misión</h2>
        <p className="parrafo__texto">
          Brindarles a nuestros clientes las mejores soluciones informáticas
          diferenciándonos de la competencia.
        </p>
      </div>
    </div>

    <div className="vision">
      <div className="parrafo">
        <h2 className="parrafo__titulo">Nuestra Visión</h2>
        <p className="parrafo__texto">
          Convertirnos en una empresa líder en el mercado de la tecnología,
          ofreciendo a nuestros clientes la mejor calidad de atención al
          precio más conveniente.
        </p>
     
      </div>
      
  
   
       </div>
  </div>
)

}

export default AboutUs