import ActiveClass from "../classes/ActiveClass.js"
import { lockBody, unlockBody } from "../modules/functions.js"

addEventListener("DOMContentLoaded", ()=>{
    const btnOpenMenu = document.querySelector('.header__menu-burger')
    const btnCloseMenu = document.querySelector('.header__menu-close')
    const openMenu = new ActiveClass ({
        element: document.querySelector('.header__menu'),
        active: false,
        className: "active"
    })
    btnOpenMenu.onclick = ()=>{
        openMenu.setActive(true)
        lockBody()
    }
    btnCloseMenu.onclick = () => {
        openMenu.setActive(false)
        unlockBody()
    }
})