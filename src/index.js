import './styles.css';
import cardsTemplate from './cards.hbs';
import cards from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainer = document.querySelector('.js-menu');
const switchThemeRef = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
body.classList.add(Theme.LIGHT);


saveThemeChoice();
function saveThemeChoice() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    switchThemeRef.checked = true;
  }
}


const cardsMarkup = cardsTemplate(cards);
menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);
switchThemeRef.addEventListener('change', onThemeSwitch);

function onThemeSwitch() {

  if (switchThemeRef.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', 'dark');
  } else if (!switchThemeRef.checked) {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', 'light');
  }
}
