let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let telefoneInput = document.getElementById("phone");
let senhaInput = document.getElementById("password");

nameInput.addEventListener("keydown", function(event) {

  // Eventos de teclado, impressão dos unicodes de cada tecla:
  console.log("Código da tecla pressionada:", event.key || event.code);
  if (event.key === "Enter") {
    event.preventDefault();
    emailInput.focus();
  }
});

emailInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    telefoneInput.focus();
  }
});

telefoneInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    senhaInput.focus();
  }
});

// Eventos de formulário: onfocus e onblur
nameInput.addEventListener("onblur", function() {
  nameInput.style.backgroundColor = "black";
});

nameInput.addEventListener("focus", function() {
  nameInput.style.backgroundColor = "#693708";
});

// Criação do usuário e utilizando o local storage, transformando o objeto em um arquivo JSON:

function iniciar() {
  document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let name = nameInput.value;
    let email = emailInput.value;
    let telefone = telefoneInput.value;
    let senha = senhaInput.value;
    
    if (name && email && telefone && senha) {
  
      let userData = {
          name: name,
          email: email,
          telefone: telefone,
          senha: senha
        };
      
      localStorage.setItem("userData", JSON.stringify(userData));
  
      alert("Cadastro realizado com sucesso!");
  
      window.location.href = "../login/login.html";
    } else {
  
      alert("Por favor, preencha todos os campos!");
    }
  });
}