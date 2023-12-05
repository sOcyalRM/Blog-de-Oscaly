const images = document.querySelectorAll('.prof_figure');
console.log(images)

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('img');

        image.classList.toggle('unset', entry.isIntersecting);
    });
}

const options = {
    root: null,
    rootMargin: "-56px",/*Hace mas pequeño el contenedor(el area que determina cuando aparecera y desaparecera la imagen) */
    threshold: .96
}
const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image =>{
    observer.observe(image);
})


//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);
document.getElementById("inputSearch").addEventListener("keyout", buscador_interno);

//Ocultar contenido al pulsar esc
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      document.getElementById("cover-ctn-search").classList.toggle(ocultar_buscador());
    }
  });

  /*Ocultar con segundo clic*/
/*document.addEventListener("keydown", function(event) {
    if (event.key === "click") {
      document.getElementById("icon-search").classList.toggle(ocultar_buscador());
    }
  });*/


                        //Buscador de contenido

//Declarando variables

bars_search = document.getElementById("ctn-bars-search"); 
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");


//Funcion para mostrar el buscador 
function mostrar_buscador(){
    bars_search.style.top= "2px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
}

//Funcion para ocultar el buscador
function ocultar_buscador(){
    bars_search.style.top = "-120px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
}


//Creando filtrado de busqueda

function buscador_interno(){
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"

    for (i=0; i<li.lenght; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";

        }else{
            li[i].style.display = "none"; //Continuar aqui
        }
    }
}
