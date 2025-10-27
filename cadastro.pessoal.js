document.getElementById("formPessoal").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Conta de usuário pessoal criada com sucesso!");
    window.location.href = "homePessoal.html";
  });
  document.getElementById("formPessoal").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nomeUsuario = this.querySelector("input[type='text']").value;
    localStorage.setItem("nomeUsuario", nomeUsuario);
  
    window.location.href = "homePessoal.html";
  });
  