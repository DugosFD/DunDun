const acordeon = document.getElementsByClassName("caja-pregunta");

for (i = 0; i < acordeon.length; i++){
    acordeon[i].addEventListener("click", function(){
        this.classList.toggle("activo");
    })
}