document.addEventListener("DOMContentLoaded", () => {

  const username = localStorage.getItem("username") || "Convidado";
  document.getElementById("username").textContent = `Hey, ${username}!`;

  const products = [
    { name: "Coxinha", price: 5.00, img: "https://tse1.explicit.bing.net/th/id/OIP.y5lCjszLsBBJlykd_T7TJAHaE6?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Mini Pizza", price: 6.50, img: "https://alegrafoods.com.br/wp-content/uploads/2025/01/mini-pizza-de-calabresa.jpg" },
    { name: "Brigadeiro", price: 2.50, img: "https://t3.ftcdn.net/jpg/00/51/25/70/360_F_51257090_nRwT7YiPRp6TTyB6YnipFrxfd7XLGQLt.jpg" },
    { name: "Esfirra", price: 4.00, img: "https://img.saborosos.com.br/imagens/esfiha-aberta-de-carne.jpg" },
    { name: "Beijinho", price: 2.50, img: "https://ogimg.infoglobo.com.br/rio/bairros/24074836-749-05e/FT1086A/652/Carolina-Sales-Beijinho-de-coco.jpg" },
    { name: "Kibe", price: 5.50, img: "https://receitasdepesos.com.br/wp-content/uploads/2023/06/kibe.jpg" }
  ];

  const productList = document.getElementById("product-list");
  const searchInput = document.getElementById("search");

  const modal = document.getElementById("modal");
  const modalName = document.getElementById("modalProductName");

  const addBtn = document.getElementById("addBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let selectedProduct = null;

  const cartCount = document.getElementById("cart-count");

  const updateCartCount = () => {
    cartCount.textContent = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const openModal = (product) => {
    selectedProduct = product;
    modalName.textContent = product.name;
    modal.style.display = "flex";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  const renderProducts = (items) => {
    productList.innerHTML = "";
    items.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>R$ ${p.price.toFixed(2)}</p>
      `;

      card.addEventListener("click", () => openModal(p));
      productList.appendChild(card);
    });
  };

  addBtn.addEventListener("click", () => {
    const date = document.getElementById("serviceDate").value;
    const time = document.getElementById("serviceTime").value;
    const location = document.getElementById("serviceLocation").value;
    const quantity = document.getElementById("serviceQuantity").value;

    if (!date || !time || !location) {
      alert("Preencha todos os campos!");
      return;
    }

    cart.push({
      ...selectedProduct,
      serviceDate: date,
      serviceTime: time,
      serviceLocation: location,
      quantity: quantity
    });

    updateCartCount();
    closeModal();
    alert("Serviço adicionado com sucesso!");
  });

  cancelBtn.addEventListener("click", closeModal);

  renderProducts(products);
  updateCartCount();

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(q)
    );
    renderProducts(filtered);
  });

  /* Navegação */
  document.getElementById("home-btn").onclick = () => window.location.href = "home.html";
  document.getElementById("categories-btn").onclick = () => window.location.href = "categorias.html";
  document.getElementById("history-btn").onclick = () => window.location.href = "historico.html";
  document.getElementById("cart-btn").onclick = () => window.location.href = "carrinho.html";

});
