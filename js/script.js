window.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.burger-menu'),
        body = document.querySelector('body'),
        header = document.querySelector(".header"),
        mainMenu = document.querySelector(".main-menu"),
        logo2 = document.querySelector(".header__logo2"),
        logoBurger = document.querySelector(".header__logo-burger"),
        path = document.querySelector(".path");
            
    hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active'); 
     body.classList.toggle('lock'); 
     header.classList.toggle("header_bg");
     mainMenu.classList.toggle("main-menu_hidden");
     logo2.classList.toggle("header__logo2_hidden");
     logoBurger.classList.toggle("header__logo-burger_active");
     path.classList.toggle("hidden");
    });
})