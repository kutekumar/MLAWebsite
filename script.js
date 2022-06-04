const body = document.body
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
const hero = document.querySelector('.hero')
const content = document.querySelector('.content')
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

//Get Menu

const homeNav = document.querySelector('.home')
const aboutNav = document.querySelector('.about')
const servicesNav = document.querySelector('.services')
const contactNav = document.querySelector('.contact')

document.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

const totalImages = 9

const bgStr = `url(imgs/mla${
  generateRandomNum() < 10 ? '0' + generateRandomNum() : generateRandomNum()
}.jpg)`

hero.style.backgroundImage = bgStr
// content.style.backgroundImage = bgStr

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

function generateRandomNum() {
  return Math.ceil(Math.random() * totalImages)
}

checkBoxes()

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
