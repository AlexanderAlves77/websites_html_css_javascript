let menu = document.getElementById("menu-icon")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  navbar.classList.remove('active')
}