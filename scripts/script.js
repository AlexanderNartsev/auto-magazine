const pressArr = [
    {
        state: "Engadget: VW’s e-BULLI concept shows how your classic van can becomean EV.",
        link: "https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html"
    },
    {
        state: "Drive.ru: Вэн Volkswagen e-Bulli скрестил классику с современной техникой.",
        link: "https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html"
    }
]

const page = document.querySelector('.page');
const header = page.querySelector('.header');
const menu = header.querySelector('.header__menu');
const buttonMenu = header.querySelector('.button_type_burger');
const buttonClose = header.querySelector('.button_type_close');
const pressMagazine = page.querySelector('.press__magazine');
const pressText = page.querySelector('.press__text');
const pressLink = page.querySelector('.press__link');
const pressList = page.querySelector('.press__list');
const buttonPressArr = pressList.querySelectorAll('.press__button');

function openMobileMenu() {

    header.classList.add('header_mobile');
    menu.classList.add('header__menu_style_mobile');
    buttonClose.classList.remove('button_display_hide');
    buttonMenu.classList.add('button_display_hide');

}

function closeMobileMenu() {

    header.classList.remove('header_mobile');
    menu.classList.remove('header__menu_style_mobile');
    buttonClose.classList.add('button_display_hide');
    buttonMenu.classList.remove('button_display_hide');

}

function addListenetrs(arr1, arr2) {

    for (i = 0; i < arr1.length; i++) {

        let n = i;

        arr1[i].addEventListener('click', () => {

            pressText.textContent = arr2[n].state;
            pressLink.setAttribute('href', arr2[n].link);

            for (k = 0; k < arr1.length; k++) {

                arr1[k].classList.remove('press__button_switch_on');

            }

            arr1[n].classList.add('press__button_switch_on');

        })

    }

};

buttonMenu.addEventListener('click', openMobileMenu);
buttonClose.addEventListener('click', closeMobileMenu);

addListenetrs(buttonPressArr, pressArr);










