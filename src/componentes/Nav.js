import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Ajusta el valor de offset según la posición del carrusel principal
  const offset = 1000; // Por ejemplo, 500 píxeles


  return (
    <nav className={`navbar navbar-expand-lg ${scrollPosition > 100 ? 'scrolled' : ''}`} id="navHome">
     
      <div className="container-fluid">
        <div className="col-md-4 col-8" id="logoNav">
          <a className="navbar-brand" href="index.html"><img src="img/logo.png" id="logoGrande" alt="Logo"/></a>
        </div>
   <div className="d-flex flex-row mb-3">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
           
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Spa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gastronomia
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Piscina
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Habitaciones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                  Suite Presidencial
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Habitación Ejecutiva con Vista al Mar
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Suite Junior con Terraza Privada
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Habitación Temática de Lujo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Suite Familiar de Dos Habitaciones
                  </a>
                </li>
                
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Reservas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ubicación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contactanos
              </a>
            </li>
            
          </ul>
        </div>
        
          <div className="nav-item">
       
              <a className="nav-link" href="#">
              <i class="bi bi-cart3"></i>
              </a>
              </div>
          <div className="nav-item dropdown">
            
              <a
                className="nav-link "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img id="imgUser" src="img/usuario.webp" alt="User"/>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
        </div>
        


      </div>
    </nav>
    
    
    );
}
export default Nav;