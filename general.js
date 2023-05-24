AOS.init({
    duration: 1000
});

const iconoMenu = document.querySelector("#iconoMenu"),
      menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", (e) =>{
    menu.classList.toggle("menuActivo");
    iconoMenu.classList.toggle("botonActivo");

    if (iconoMenu.classList.contains("botonActivo")) {
        iconoMenu.style.transform = "rotate(720deg)";
        iconoMenu.style.color = "var(--secondary-2)";
      } else {
        iconoMenu.style.transform = "rotate(0deg)";
        iconoMenu.style.color = "var(--primary)";
      }
})