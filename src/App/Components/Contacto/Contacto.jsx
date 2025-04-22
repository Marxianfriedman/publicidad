
import './Contacto.css';
import {useState} from 'react';

function Contacto () {
  const [mensaje, setMensaje] = useState('');

  const enviarWhatsApp = () => {
    const telefono = '573223675349';
    const texto = mensaje.trim() !== ''
      ? mensaje.trim()
      : `Hola, podrias brindarme informacion sobre los productos`;
  
      
      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
      window.open(url, 'blank');

      setMensaje('');
  };

  return (
    <section id="Contacto" className="contacto">
      <h2>Contactanos</h2>
      <div className="redes-sociales">
        <a href="https://wa.me/573104057097?text=Hola%2C%20podr%C3%ADas%20brindarme%20informaci%C3%B3n%20sobre%20los%20productos" target="_blank" rel="noopener noreferrer" className="whatsapp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="tiktok">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <div className="formulario-contacto">
        <textarea
            placeholder="Escribe un mensaje opcional para enviar por WhatsApp..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>

          <button onClick={enviarWhatsApp}>Enviar por WhatsApp</button>
      </div>
    </section>
  );
}

export default Contacto;


