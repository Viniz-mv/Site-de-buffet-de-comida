document.addEventListener("DOMContentLoaded", () => {

  const username = localStorage.getItem("username") || "Convidado";
  document.getElementById("username").textContent = `Hey, ${username}!`;

  const categories = [
    { name: "Salgados", img: "https://img77.uenicdn.com/image/upload/v1571243996/service_images/shutterstock_797089780.jpg" },
    { name: "Doces", img: "https://thumbs.dreamstime.com/z/doces-com-geleia-e-a%C3%A7%C3%BAcar-disposi%C3%A7%C3%A3o-colorida-de-deleites-diferentes-dos-childs-112410809.jpg" },
    { name: "Bebidas", img: "https://tse2.mm.bing.net/th/id/OIP.XQdN5pC6v01fqtk-9JY68AHaEO?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Massas", img: "https://www.horizontealimentos.com.br/wp-content/uploads/2018/01/massa.jpg" },
    { name: "Sobremesas", img: "https://tse2.mm.bing.net/th/id/OIP.3ed60SA9ERteqzkXQfybugHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" }
  ];
const categoryList = document.getElementById("category-list");
  const searchInput = document.getElementById("search");

  const renderCategories = (items) => {
    categoryList.innerHTML = "";
    items.forEach(c => {
      const card = document.createElement("div");
      card.classList.add("category-card");

      card.innerHTML = `
        <img src="${c.img}" alt="${c.name}">
        <h4>${c.name}</h4>
      `;

      // 🔥 Agora QUALQUER categoria leva para homePessoal.html
      card.addEventListener("click", () => {
        window.location.href = "homePessoal.html";
      });

      categoryList.appendChild(card);
    });
  };

  renderCategories(categories);

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = categories.filter(c => c.name.toLowerCase().includes(query));
    renderCategories(filtered);
  });

  /* Navegação inferior */
  document.getElementById("home-btn").onclick = () => window.location.href = "homePessoal.html";
  document.getElementById("categories-btn").onclick = () => window.location.href = "categorias.html";
  document.getElementById("history-btn").onclick = () => window.location.href = "historico.html";
  document.getElementById("cart-btn").onclick = () => window.location.href = "carrinho.html";

});