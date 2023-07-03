// Essa parte é sobre os requisitos da disciplina:

let fraseTimeOut3 = "TimeOut de 3 segundos";
let fraseTimeOut6 = "TimeOut de 6 segundos";
let fraseTimeOut9 = "TimeOut de 9 segundos";

// Função anônima com argumento:
setTimeout(function(frase) {
  console.log(frase);
}, 3000, fraseTimeOut3);

// Função anônima sem argumento:
setTimeout(function() {
  console.log(fraseTimeOut6);
}, 6000);

setTimeout(function() {
  exibirMensagem(fraseTimeOut9);
}, 9000);

// Função com nome:
function exibirMensagem(frase) {
  console.log(frase);
}

// Função aninhada e auto executável com arrow function:
function calculadora() {
  let a = 6;
  let b = 2;

  ((x, y) => console.log("A soma de 6 e 2 é ", x + y))(a, b);

  ((x, y) => console.log("A subtração de 6 e 2 é ", x - y))(a, b);

  ((x, y) => console.log("A divisão de 6 e 2 é ", x / y))(a, b);
}

setTimeout(calculadora, 10000);

// Eventos de movimento de mouse:

let btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("mousemove", function() {
  btnLogin.style.width = "450px";
  btnLogin.style.height = "60px";
});

btnLogin.addEventListener("mouseleave", function() {
  btnLogin.style.width = "395px";
  btnLogin.style.height = "40px";
});

// A partir da função iniciar(), o código está voltado para o projeto:

function iniciar() {
  let emailInput = document.getElementById("email");
  let senhaInput = document.getElementById("password");

  // Evento de teclado:
  emailInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      senhaInput.focus();
    }
  });

  // Validação dos campos e-mail e senha:
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = emailInput.value;
    let senha = senhaInput.value;

    if (email && senha) {
      let storedData = localStorage.getItem("userData");
      if (storedData) {
        let userData = JSON.parse(storedData);
        if (userData.email === email && userData.senha === senha) {
          
          // Função sendo passada como argumento para outra função:
          function saudacao(emailDoUsuario) {
            alert("Seja bem-vindo usuário do e-mail: " + emailDoUsuario);
          }

          function realizarSaudacao(funcao, emailDoUsuario) {
            funcao(emailDoUsuario);
          }

          realizarSaudacao(saudacao, email);

          // Exemplo das caixas de diálogo

          let pergunta = confirm("Você está feliz?");

          if (pergunta) {
            alertify.alert("Que bom! Aproveite o nosso site!");
            window.location.href = "../produtos/produtos.html";
          } else {
            alertify.alert("Que pena! Aproveite o nosso site!");
            window.location.href = "../produtos/produtos.html";
          }
        } else {
          alertify.error("E-mail ou senha incorretos. Por favor, tente novamente.");
        }
      } else {
        alertify.alert("Não há registro de usuário. Por favor, cadastre-se primeiro.");
      }
    } else {
      alertify.alert("Por favor, preencha todos os campos!");
    }
  });

}

document.addEventListener("DOMContentLoaded", function() {
  iniciar();
});
