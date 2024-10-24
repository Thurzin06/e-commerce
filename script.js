const navbar = document.querySelector(".navbar")
const menubutton = document.querySelector(".menu-button")

menubutton.addEventListener('click', ()=>{
    navbar.classList.toggle("show-menu")
})