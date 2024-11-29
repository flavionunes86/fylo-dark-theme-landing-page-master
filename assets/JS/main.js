 // Adiciona o evento de clique ao botão
document.getElementById("submitemail").addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const errorMessage = document.getElementById("errorMessage");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    errorMessage.style.display = "none"; 
    alert("E-mail enviado com sucesso!");

  } else {
    errorMessage.style.display = "block"; 
    errorMessage.innerText = "Por favor, insira um e-mail válido.";
  }
});


//Lembrete!!!!
// Preciso da Expressão regular para garantir que o formato de e-mail seja aceito pelos servidores e sistemas de email.