const nav = document.getElementById('nav')
const navList = nav.querySelector('.nav__list')
const header = document.getElementById('header')
const navToggleBtn = document.getElementById('nav-toggle')


navToggleBtn.addEventListener('click', event => {
  nav.style.willChange = 'opacity'
  navList.style.willChange = 'transform'
  header.classList.toggle('nav-open')
  setTimeout( () => {
    nav.style.willChange = ''
    navList.style.willChange = ''
  }, 250)
})
