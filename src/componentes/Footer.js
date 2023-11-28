import React from "react";
const Footer = () =>{
    return( 
    <footer class="NavFooter ">
    
    <div class="container">
      <div class="row ">
        <div class="col-12 col-lg-6">
            <div >
              <p class="footer-item">Dirección:<br/>
              <a href="#"><i class="bi bi-geo-alt-fill"></i>Calle Principal, Ciudad, País</a>

              </p>
              <p class="footer-item">
                Contacto:<br/>
                <a href="#"><i class="bi bi-envelope-at"></i> 
                info@hotelaurora.com
                  </a><br/><a href="#">
              <i class="bi bi-telephone-fill"></i> 
              +123 456 789 </a><br />
                               
              </p>
              <p class="footer-item">Horarios:<br/>
              <i class="bi bi-clock"></i>
Servicio1:  Todos los días, de 07:30 a 10:30<br/>
<i class="bi bi-clock"></i>

Servicio2:  Todos los días, de 12:30 a 15:00
              </p>
            </div>
            
              <p class="footer-item">            
                    <a class="enlaceFondoOscuro" href="/es/aviso-legal" title="Aviso legal">Aviso legal&nbsp;</a> |&nbsp;
                    <a class="enlaceFondoOscuro" href="/es/politica-de-privacidad" title="Política de privacidad">Pol&iacute;tica de privacidad</a>&nbsp; |&nbsp; 
                    <a class="enlaceFondoOscuro" href="/es/politica-de-cookies" title="Política de cookies">Pol&iacute;tica de cookies</a>
                  </p>
         
        </div>
        <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center">
          
            <img src="img/logo.png" id="logoFooter"/>
          
          
        </div>
      </div>
    </div>
 
</footer>);
}
export default Footer;