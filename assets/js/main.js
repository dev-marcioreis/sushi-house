const openMenuBtn = document.getElementById('openBtn')
const closeMenuBtn = document.getElementById('closeBtn')
const navbarMenuList = document.getElementById('navbarMenu')
const overlay = document.querySelector('.overlay')

// Open menu navbar on click
const showMenuNavbarList = () => {
    navbarMenuList.style.right = '0'
    openMenuBtn.style.display = 'none'
    closeMenuBtn.style.display = 'flex'
}

// Close menu navbar on click
const hideMenuNavbarList = () => {
    navbarMenuList.style.right = '-120%'
    closeMenuBtn.style.display = 'none'
    openMenuBtn.style.display = 'flex'
}

openMenuBtn.addEventListener('click', showMenuNavbarList)
closeMenuBtn.addEventListener('click', hideMenuNavbarList)
overlay.addEventListener('click', hideMenuNavbarList)

// Close menu navbar when clicking any option
if(window.innerWidth < 992) {
    document.querySelectorAll('.navbar__list .navbar__item').forEach(navbar => {
        navbar.addEventListener('click', () => {
            hideMenuNavbarList()
        })
    })
}

// Change navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling', window.scrollY)
})