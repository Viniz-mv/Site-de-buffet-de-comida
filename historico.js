document.addEventListener("DOMContentLoaded", () => {
  const historyList = document.getElementById("history-list");
  const emptyMessage = document.getElementById("empty-history");

  // Carrega os pedidos salvos
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const renderHistory = () => {
    if (orders.length === 0) {
      emptyMessage.style.display = "block";
      return;
    }

    emptyMessage.style.display = "none";
    historyList.innerHTML = "";

    orders.forEach(order => {
      const card = document.createElement("div");
      card.classList.add("order-card");

      const date = new Date(order.date).toLocaleString("pt-BR");

      card.innerHTML = `
        <h4>Pedido realizado em: ${date}</h4>
        <div class="order-items">
          ${order.items.map(i => `<p>${i.name} — R$ ${i.price.toFixed(2)}</p>`).join("")}
        </div>
        <p class="order-total">Total: R$ ${order.total.toFixed(2)}</p>
      `;

      historyList.appendChild(card);
    });
  };

  renderHistory();

  /* Navegação */
  document.getElementById("home-btn").onclick = () => window.location.href = "homePessoal.html";
  document.getElementById("categories-btn").onclick = () => window.location.href = "categorias.html";
  document.getElementById("cart-btn").onclick = () => window.location.href = "carrinho.html";
});
