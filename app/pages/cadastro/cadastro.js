document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("phone").value;
    let senha = document.getElementById("password").value;
    
    if (name && email && telefone && senha) {

        let userData = {
            name: name,
            email: email,
            telefone: telefone,
            senha: senha
          };
      
          localStorage.setItem("userData", JSON.stringify(userData));

      alertify.alert("Cadastro realizado com sucesso!");

      window.location.href = "../login/login.html";
    } else {

      alert("Por favor, preencha todos os campos!");
    }
  });