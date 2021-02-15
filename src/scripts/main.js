const nav = document.getElementById('nav')
const header = document.getElementById('header')
const navToggleBtn = document.getElementById('nav-toggle')

navToggleBtn.addEventListener('click', event => {
  header.classList.toggle('nav-open')
})
