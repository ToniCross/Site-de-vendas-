'use strict';

const USERNAME_KEY = 'toniazzo';
const LOGGED_IN_KEY = '123';


/**
 * Retorna o ano corrente com quatro dígitos.
 * @returns
 */
function currentYear() {
  return new Date().getFullYear();
}

function formatZero(date) {
  return parseInt(date) < 10 ? '0' + date : date;
}

export function formatFullDate(d) {
  return (
    formatZero(d.getDate()) +
    '/' +
    formatZero(d.getMonth()) +
    '/' +
    formatZero(d.getFullYear())
  );
}

/**
 * Configurações da tela realizadas no carregamento da aplicação
 * de acordo com o estado de login do usuário.
 */
$(function () {
  let isLoggedIn = localStorage.getItem(LOGGED_IN_KEY);

  let menu = isLoggedIn ? '/menu.html' : '/menu-anonimo.html';
  $('#menu').load(menu);
  $('#footer').load('/footer.html');

  setTimeout(function () {
    $('.sidenav').sidenav();
    document.querySelector('#year').textContent = currentYear();
  }, 1000);
});

export { USERNAME_KEY, COSTS_KEY as TOTAL_COSTS_KEY, LOGGED_IN_KEY };
