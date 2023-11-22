import React from "react";
const Nav=()=>{
    return(
      <nav className="navbar navbar-expand-lg" id="navHome">
      <div className="container-fluid">
        <div className="col-md-4 col-7" id="logoNav">
          <a className="navbar-brand" href="index.html"><img src="img/logo.png" id="logoGrande" alt="Logo"/></a>
        </div>
    
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
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
              <a className="nav-link" href="#">
              <i class="bi bi-cart3"></i>
              </a>
            </li>
          <li className="nav-item dropdown">
            
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
            </li></ul>
      </div>
    </nav>
    
    
    );
}
export default Nav;