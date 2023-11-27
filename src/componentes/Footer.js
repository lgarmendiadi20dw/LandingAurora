import React from "react";
const Footer = () =>{
    return( <footer class="NavFooter text-center py-3 ">
    
    <div class="container">
      <div class="row">
        <div class="col-6">
            <div >
              <p >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill iconos" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>  Euskal Herria plaza 1 - 20230
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill iconos" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
                  Dentro del municipio, SAC: <a class="enlaceFondoOscuro" href="tel:010">010</a> | Polic&iacute;a Municipal: <a class="enlaceFondoOscuro" href="tel:092">092</a><br />
                  Desde fuera, SAC: <a class="enlaceFondoOscuro" href="tel:943737030">943 73 70 30</a> | Polic&iacute;a Municipal: <a class="enlaceFondoOscuro" href="tel:943109662">943 10 96 62</a><br />
                              Horario SAC: <span class="enlaceFondoOscuro">de lunes a viernes, de 07:30 a 15:00</span>
              </p>
            </div>
            
                  <p>
                    <a class="enlaceFondoOscuro" href="/es/aviso-legal" title="Aviso legal">Aviso legal&nbsp;</a> |&nbsp;
                    <a class="enlaceFondoOscuro" href="/es/politica-de-privacidad" title="Política de privacidad">Pol&iacute;tica de privacidad</a>&nbsp; |&nbsp; 
                    <a class="enlaceFondoOscuro" href="/es/politica-de-cookies" title="Política de cookies">Pol&iacute;tica de cookies</a>
                  </p>
         
        </div>
        <div class="col-6 ">
          <img src="img/escudo.png" id="escudoFooter"/>
        </div>
      </div>
    </div>
 
</footer>);
}
export default Footer;