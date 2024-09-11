




function mostrarResults(results){
modulos.forEach(element => {
    let card = document.createElement('div');
    card.classList.add("card");

    card.innerHTML=     
 ` <div class="container entradas" ${element.videos}>
        <div class="img-news"></div>
            <div class="cuadro">
                <div class="usuarioContenedor">
                    <div class="usuario" >
                        <img src=" ${element.enlace}" 
                        width="100%" alt="avatar" style="border-radius: 50%;">
                    
                    </div>
                         <div class="puntaje" > <i class="fa-solid fa-star"></i>
                             </div>
                            <div class="descripcion">
                                <h1>${element.titulo}</h1>
                                <p>${element.descripcion}</p>
                                <span> <a href="#"> ver más...</a> </span>
            
                            </div>
                </div>
            </div>
                    
    </div>  
 `
 container.appendChild(card)

})


}