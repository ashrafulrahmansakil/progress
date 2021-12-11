const humbarger = document.querySelector(".humbarger");
const header__Navbar= document.querySelector(".header__navbar");
humbarger.addEventListener("click",()=>{
    humbarger.classList.toggle("active");
    header__Navbar.classList.toggle("active");
})

document.querySelectorAll(".nav__link"),forEach(n => n.addEventListener("click",()=>{
    humbarger.classList.remove("active");
    header__Navbar.classList.remove("active");
}))