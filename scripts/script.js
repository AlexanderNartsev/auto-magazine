const page = document.querySelector('.page');
const header = page.querySelector('.header');
const menu = header.querySelector('.header__menu');
const buttonMenu = header.querySelector('.button_type_burger');
const buttonClose = header.querySelector('.button_type_close');

function openMobileMenu() {

    header.classList.add('header__menu_style_mobile');
    menu.classList.add('header__menu_style_mobile');
    buttonClose.classList.remove('button_display_hide');
    buttonMenu.classList.add('button_display_hide');

}

function closeMobileMenu() {

    header.classList.remove('header__menu_style_mobile');
    menu.classList.remove('header__menu_style_mobile');
    buttonClose.classList.add('button_display_hide');
    buttonMenu.classList.remove('button_display_hide');

}

buttonMenu.addEventListener('click', openMobileMenu);
buttonClose.addEventListener('click', closeMobileMenu);
