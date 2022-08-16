const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
    nav.classList.toggle('nav--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })
    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

navBtn.addEventListener('click', handleNav)

function addShadow() {
    if (nav.classList.contains('nav--active')) {
        navBtn.classList.remove('shadow-bg');
    } else if (window.scrollY >= 800) {
        navBtn.classList.add('shadow-bg');
    }else{navBtn.classList.remove('shadow-bg')}
}

window.addEventListener('scroll', addShadow);