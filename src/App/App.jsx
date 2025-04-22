import './App.css';
import Header from './Components/Header/Header';
import Servicios from './Components/Servicios/Servicios';
import Contacto from './Components/Contacto/Contacto'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App;