AOS.init({
    duration: 1000
});

const iconoMenu = document.querySelector("#icono-menu"),
      menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", (e) =>{
    menu.classList.toggle("menu-activo");
    iconoMenu.classList.toggle("boton-activo");

    if (iconoMenu.classList.contains("boton-activo")) {
        iconoMenu.style.transform = "rotate(180deg)";
        iconoMenu.style.color = "var(--naranja)";
        document.body.style.overflow="hidden";
        document.querySelector(".fondo-negro").style.zIndex="1";
        document.querySelector(".fondo-negro").style.opacity=".75";
      } else {
        iconoMenu.style.transform = "rotate(0deg)";
        iconoMenu.style.color = "var(--azul)";
        document.body.style.overflow="auto";
        document.querySelector(".fondo-negro").style.zIndex="-1";
        document.querySelector(".fondo-negro").style.opacity="0";
      }
})

function cerrarPopUp(){
  document.querySelector("#caja-negra-ABNT").style.display="none";
  document.body.style.overflow="auto";
}