'use strict';

import { LOGGED_IN_KEY, USERNAME_KEY } from '../../util/shared.js';

window.onload = function () {

  document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const loginButton = event.submitter;

      if (loginButton.name === 'login') {
        const username = loginForm.querySelector('#login-form input[name="username"]').value;
        const password = loginForm.querySelector('#login-form input[name="password"]').value;

        const storedData = localStorage.getItem('userData');

        if (storedData) {

          const userData = JSON.parse(storedData);
  
          if (username === userData.username && password === userData.password) {
            window.location.href = '../produtos/produtos.html';
            console.log('Login bem-sucedido!');
          } else {
            console.log('Usuário ou senha inválidos');
          }
        } else {
          console.log('Não há usuário cadastrado');
        }
      }
   });

   registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const registerButton = event.submitter;

    if (registerButton.name === 'register') {

      const username = registerForm.querySelector('input[name="username"]').value;
      const email = registerForm.querySelector('input[name="email"]').value;
      const street = registerForm.querySelector('input[name="street"]').value;
      const number = registerForm.querySelector('input[name="number"]').value;
      const phone = registerForm.querySelector('input[name="phone"]').value;
      const password = registerForm.querySelector('input[name="password"]').value;

      const user = {
        username: username,
        email: email,
        street: street,
        number: number,
        phone: phone,
        password: password
      };
      
      localStorage.setItem('user', JSON.stringify(user));
  
      window.location.href = 'login.html';
    }
  });
});
}