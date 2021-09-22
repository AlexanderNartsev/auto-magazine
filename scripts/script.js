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

function addPoints(arr1, arr2) {

    arr1.forEach(element => {

        const template = page.querySelector('#element-template').content;
        const point = template.querySelector('.press__button').cloneNode(true);

        arr2.prepend(point);

    });

};

function addListenetrs(arr) {

    const buttonPressArr = pressList.querySelectorAll('.press__button');

    for (i = 0; i < buttonPressArr.length; i++) {

        let n = i;

        buttonPressArr[i].addEventListener('click', () => {

            pressText.textContent = arr[n].state;
            pressLink.setAttribute('href', arr[n].link);

            for (k = 0; k < buttonPressArr.length; k++) {

                buttonPressArr[k].classList.remove('press__button_switch_on');

            }

            buttonPressArr[n].classList.add('press__button_switch_on');

        })

    }

};

buttonMenu.addEventListener('click', openMobileMenu);
buttonClose.addEventListener('click', closeMobileMenu);

addPoints(pressArr, pressList);
addListenetrs(pressArr);