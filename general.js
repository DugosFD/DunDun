AOS.init({
    duration: 1000
});

const botonMenu = document.querySelector("#boton-menu"),
      menu = document.querySelector("#menu");

botonMenu.addEventListener("click", (e) =>{
    menu.classList.toggle("menu-activo");
    botonMenu.classList.toggle("boton-activo");

    if (botonMenu.classList.contains("boton-activo")) {
        document.querySelector("#icono-menu").style.transform = "rotate(180deg)";
        document.querySelector("#icono-menu").style.color = "var(--naranja)";
        document.body.style.overflow="hidden";
        document.querySelector(".fondo-negro").style.zIndex="1";
        document.querySelector(".fondo-negro").style.opacity=".75";
      } else {
        document.querySelector("#icono-menu").style.transform = "rotate(0deg)";
        document.querySelector("#icono-menu").style.color = "var(--azul)";
        document.body.style.overflow="auto";
        document.querySelector(".fondo-negro").style.zIndex="-1";
        document.querySelector(".fondo-negro").style.opacity="0";
      }
})

function cerrarPopUp(){
  document.querySelector("#caja-negra-ABNT").style.display="none";
  document.body.style.overflow="auto";
}