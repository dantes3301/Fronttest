import ActiveClass from "./classes/ActiveClass.js"

addEventListener("DOMContentLoaded", ()=>{
    const btnOpenMenu = document.querySelector('.header__menu-burger')
    const openMenu = new ActiveClass ({
        element: document.querySelector('.header__menu'),
        active: false,
        className: "header__menu active"
    })
    btnOpenMenu.onclick = ()=>{
        openMenu.setActive(true)
    }
})