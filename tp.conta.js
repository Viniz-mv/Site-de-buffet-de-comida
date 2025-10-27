function selecionarTipo(tipo) {
    if (tipo === "pessoal") {
      window.location.href = "cadastro.pessoal.html";
    } else {
      window.location.href = "cadastro.empresarial.html";
    }
  }
  