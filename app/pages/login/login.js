'use strict';

import { LOGGED_IN_KEY, USERNAME_KEY } from '../../util/shared.js';

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let senha = document.getElementById("password").value;

  console.log("Ele pegou as variáveis");

  if (email && senha) {
    let storedData = localStorage.getItem("userData");
    if (storedData) {
      let userData = JSON.parse(storedData);
      if (userData.email === email && userData.senha === senha) {
        
        alertify.success("Login realizado com sucesso!");

        window.location.href = "../produtos/produtos.html";
        console.log("Era pra ter desviado para a página produtos");
      } else {
        alertify.error("Email ou senha incorretos. Por favor, tente novamente.");
      }
    } else {
      alertify.alert("Não há registro de usuário. Por favor, cadastre-se primeiro.");
    }
  } else {
    alertify.alert("Por favor, preencha todos os campos!");
  }
});