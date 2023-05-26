AOS.init({
    duration: 1000
});

const iconoMenu = document.querySelector("#iconoMenu"),
      menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", (e) =>{
    menu.classList.toggle("menuActivo");
    iconoMenu.classList.toggle("botonActivo");

    if (iconoMenu.classList.contains("botonActivo")) {
        iconoMenu.style.transform = "rotate(180deg)";
        iconoMenu.style.color = "var(--secondary-2)";
        document.body.style.overflow="hidden";
        document.querySelector("#fondoNegro").style.zIndex="1";
        document.querySelector("#fondoNegro").style.opacity=".75";
      } else {
        iconoMenu.style.transform = "rotate(0deg)";
        iconoMenu.style.color = "var(--primary)";
        document.body.style.overflow="auto";
        document.querySelector("#fondoNegro").style.zIndex="-1";
        document.querySelector("#fondoNegro").style.opacity="0";
      }
})

function cerrarPopUp(){
  document.querySelector("#cajaNegraABNT").style.display="none";
  document.body.style.overflow="auto";
}