document.getElementById("btnLogin").addEventListener("click", () => {
  const email = document.querySelector('input[type="email"]').value;
  const senha = document.querySelector('input[type="password"]').value;

  const usuarioTeste = "teste@gmail.com";
  const senhaTeste = "123456";

  if (email === usuarioTeste && senha === senhaTeste) {
    window.location.href = "tp.conta.html";
  } else {
    alert("Email ou senha incorretos!");
  }
});
