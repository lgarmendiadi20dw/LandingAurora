import React from "react";
const Regalo = () =>{
    return(
    <div className="row seccion">
        <h2>Bonos Regalo</h2>
        <div className="col-4">
        <div class="card cardRegalo" >
                    <img src="img/regalo/regalo1.png" class="card-img-top " alt="img/regalo/regalo1.png"/>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Tarjeta Regalo de 2 Noches con Exquisitas Comidas y Desayunos</h5>
                        <p class="card-text">Regala Experiencias Inolvidables: 2 Noches de Lujo, 2 Desayunos Gourmet y 2 Comidas Exquisitas. El regalo perfecto para momentos que perduran.</p>
                        <div class="mt-auto">
                            <button class="btn ">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
        </div>
        <div className="col-4">
        <div class="card cardRegalo" >
                    <img src="img/regalo/regalo2.png" class="card-img-top " alt="img/regalo/regalo1.png"/>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Tarjeta Regalo para Spa, Piscina y Delicias Gastronómicas</h5>
                        <p class="card-text">Regala Relajación, Renueva el Espíritu: Tarjetas Regalo para un Día de Spa, Piscina y Delicias Gastronómicas. ¡Crea Recuerdos de Lujo y Bienestar!</p>
                        <div class="mt-auto">
                            <button class="btn ">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
        </div>
        <div className="col-4">
        <div class="card cardRegalo" >
                    <img src="img/regalo/regalo3.png" class="card-img-top " alt="img/regalo/regalo1.png"/>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Tarjeta Regalo para una Noche de Lujo con Desayuno Incluido</h5>
                        <p class="card-text">Regala Experiencias Inolvidables: Una Noche de Lujo y Desayuno Delicioso. Haz Feliz a Alguien Especial con Nuestra Tarjeta Regalo Exclusiva.</p>
                        <div class="mt-auto">
                            <button class="btn ">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>);
}
export default  Regalo;