document.getElementById("formEmpresa").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Conta de empresa criada com sucesso!");
    window.location.href = "homeEmpresa.html";
  });
  document.getElementById("formEmpresa").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nomeEmpresa = this.querySelector("input[type='text']").value;
    localStorage.setItem("nomeUsuario", nomeEmpresa);
  
    window.location.href = "homeEmpresa.html";
  });
  