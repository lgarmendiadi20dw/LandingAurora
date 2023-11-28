import logo from './logo.svg';
import './App.css';
import './css/estilo.css';

import Nav from './componentes/Nav';
import HotelCarousel from './componentes/HotelCarousel';
import InfoHabitaciones from './componentes/InfoHabitaciones';
import Footer from './componentes/Footer';

function App() {
  return (
    <body >
      <Nav/>
      <HotelCarousel/>
      <div className='container'>
        <InfoHabitaciones/>
      </div>
         
      <Footer/>
      
     
    </body>
  );
}

export default App;
