const nav = document.getElementById('nav')
const navList = nav.querySelector('.nav__list')
const header = document.getElementById('header')
const navToggleBtn = document.getElementById('nav-toggle')
let navState = false


navToggleBtn.addEventListener('click', event => {
  nav.style.willChange = 'opacity'
  navList.style.willChange = 'transform'
  header.classList.toggle('nav-open')
  navState = !navState

  setTimeout( () => {
    nav.style.willChange = ''
    navList.style.willChange = ''
  }, 250)
})

addEventListener('click', event => {
  if(navState && (event.target !== navToggleBtn) && (event.target !== navList)){
    nav.style.willChange = 'opacity'
    navList.style.willChange = 'transform'
    header.classList.remove('nav-open')
    navState = false

    setTimeout( () => {
      nav.style.willChange = ''
      navList.style.willChange = ''
    }, 250)
  }
})
