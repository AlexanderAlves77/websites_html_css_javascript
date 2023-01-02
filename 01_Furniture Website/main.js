let menu = document.getElementById("menu-icon")
let navbar = document.querySelector(".navbar")
let year = document.getElementById("year")

menu.onclick = () => {
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  navbar.classList.remove('active')
}

year.innerHTML = new Date().getFullYear()