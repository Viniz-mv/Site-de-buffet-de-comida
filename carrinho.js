document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");
  const emptyMessage = document.getElementById("empty-cart-message");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const modal = document.getElementById("paymentModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const confirmPaymentBtn = document.getElementById("confirmPaymentBtn");
  const cardForm = document.getElementById("cardForm");

  const cardNumber = document.getElementById("cardNumber");
  const cardName = document.getElementById("cardName");
  const cardDate = document.getElementById("cardDate");
  const cardCVV = document.getElementById("cardCVV");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    emptyMessage.style.display = cart.length === 0 ? "block" : "none";

    cart.forEach((item, index) => {
      total += item.price;

      const div = document.createElement("div");
      div.classList.add("cart-item");

      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <p><strong>${item.name}</strong></p>
          <p>R$ ${item.price.toFixed(2)}</p>
        </div>
        <button class="remove-btn">Remover</button>
      `;

      div.querySelector(".remove-btn").addEventListener("click", () => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });

      cartContainer.appendChild(div);
    });

    totalElement.textContent = total.toFixed(2);
  }

  // ABRIR MODAL
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
    modal.style.display = "flex";
  });

  // FECHAR MODAL
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // MOSTRAR FORMULÁRIO DO CARTÃO
  document.querySelectorAll("input[name='payment']").forEach(radio => {
    radio.addEventListener("change", e => {
      cardForm.classList.toggle("hidden", e.target.value !== "cartão");
    });
  });

  // CONFIRMAR PAGAMENTO
  confirmPaymentBtn.addEventListener("click", () => {
    const selected = document.querySelector("input[name='payment']:checked");

    if (!selected) {
      alert("Selecione uma forma de pagamento!");
      return;
    }

    if (selected.value === "cartão") {
      if (!cardNumber.value || !cardName.value || !cardDate.value || !cardCVV.value) {
        alert("Preencha todos os dados do cartão!");
        return;
      }
    }

    alert("Pedido realizado com sucesso!");
    localStorage.removeItem("cart");
    window.location.href = "historico.html";
  });

  // NAVEGAÇÃO PADRÃO
  document.getElementById("home-btn").addEventListener("click", () => {
    window.location.href = "homePessoal.html";
  });

  document.getElementById("cart-btn").addEventListener("click", () => {
    window.location.href = "categorias.html";
  });

  document.getElementById("services-btn").addEventListener("click", () => {
    window.location.href = "historico.html";
  });

  document.getElementById("more-btn").addEventListener("click", () => {
    window.location.href = "carrinho.html";
  });

  renderCart();
});
