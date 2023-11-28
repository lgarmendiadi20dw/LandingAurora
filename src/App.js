import logo from './logo.svg';
import './App.css';
import './css/estilo.css';

import Nav from './componentes/Nav';
import HotelCarousel from './componentes/HotelCarousel';
import InfoHabitaciones from './componentes/InfoHabitaciones';
import Regalo from './componentes/Regalo';
import Footer from './componentes/Footer';
import Interes from './componentes/Interes';
import Servicios from './componentes/Servicios';

function App() {
  return (
    <body >
      <Nav/>
      <HotelCarousel/>
      <div className='container'>
        <InfoHabitaciones/>
        <Servicios/>
        <Interes/>
        <Regalo/>
      </div>
         
      <Footer/>
      
     
    </body>
  );
}

export default App;
