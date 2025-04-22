import './Servicios.css';

function Servicios () {
  const servicios = [
    {nombre: 'Pendones', descripcion: 'Material duradero para exteriores', imagen: '/img/Pendones/pendon1.png' },
    { nombre: 'Adesivos', descripcion: 'Impresion de gran formato', imagen: '/img/Adesivos/adesivo1.png'},
    { nombre: 'Carteles', descripcion: 'Publicidad en puntos estrategicos', imagen: '/img/Carteles/cartel1.png'}
  ];

  return (
    <section id="Muestrario" className="servicios">
        <h2>Muestrario</h2>
        <div className="grid-servicios">
          {servicios.map((servicio, index) => (
            <div key={index} className="card-servicio">
              <h3>{ servicio.nombre }</h3>
              <em><p>{ servicio.descripcion}</p></em>
              <img src={servicio.imagen} alt={servicio.nombre} className="imagen-servicio" />
            </div>
          ))}
        </div>
    </section>
  )
}

export default Servicios;
