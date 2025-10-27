const products = [
    {
      id: 1,
      name: "Buffet Crepe",
      location: "Diadema SP",
      description: "Nosso Buffet de Crepe em Domicílio oferece sofisticação, sabor e praticidade para seus eventos.",
      price: 380,
      image: "https://media.istockphoto.com/id/482305605/pt/foto/crepes-com-chocolate-creme.jpg?s=612x612&w=0&k=20&c=aFhHXs-cQEuADU1fJyE3JkDYgrHneuUcWCAQxeJ4zIc="
    },
    {
      id: 2,
      name: "Buffet Pizza",
      location: "São Paulo SP",
      description: "Buffet de pizza com variedade e sabor incrível para festas.",
      price: 280,
      image: "https://media.istockphoto.com/id/521403691/pt/foto/quente-feito-em-casa-pizza-de-pepperoni.jpg?s=612x612&w=0&k=20&c=KWGroPbutn4ruhgedMeQ6vvPhFULRrnCMtV5coxr1AI="
    },
    {
        id: 3,
        name: "Buffet Crepe",
        location: "Diadema SP",
        description: "Nosso Buffet de Crepe em Domicílio oferece sofisticação, sabor e praticidade para seus eventos.",
        price: 400,
        image: "https://media.istockphoto.com/id/482305605/pt/foto/crepes-com-chocolate-creme.jpg?s=612x612&w=0&k=20&c=aFhHXs-cQEuADU1fJyE3JkDYgrHneuUcWCAQxeJ4zIc="
      },
      {
        id: 4,
        name: "Buffet Pizza",
        location: "São Paulo SP",
        description: "Buffet de pizza com variedade e sabor incrível para festas.",
        price: 250,
        image: "https://media.istockphoto.com/id/521403691/pt/foto/quente-feito-em-casa-pizza-de-pepperoni.jpg?s=612x612&w=0&k=20&c=KWGroPbutn4ruhgedMeQ6vvPhFULRrnCMtV5coxr1AI="
      },
      {
        id: 5,
        name: "Buffet Crepe",
        location: "Diadema SP",
        description: "Nosso Buffet de Crepe em Domicílio oferece sofisticação, sabor e praticidade para seus eventos.",
        price: 320,
        image: "https://media.istockphoto.com/id/482305605/pt/foto/crepes-com-chocolate-creme.jpg?s=612x612&w=0&k=20&c=aFhHXs-cQEuADU1fJyE3JkDYgrHneuUcWCAQxeJ4zIc="
      },
      {
        id: 6,
        name: "Buffet Pizza",
        location: "São Paulo SP",
        description: "Buffet de pizza com variedade e sabor incrível para festas.",
        price: 150,
        image: "https://media.istockphoto.com/id/521403691/pt/foto/quente-feito-em-casa-pizza-de-pepperoni.jpg?s=612x612&w=0&k=20&c=KWGroPbutn4ruhgedMeQ6vvPhFULRrnCMtV5coxr1AI="
      },
  
    {
      id: 1,
      name: "Buffet Crepe",
      location: "Diadema SP",
      description: "Nosso Buffet de Crepe em Domicílio oferece sofisticação, sabor e praticidade para seus eventos.",
      price: 380,
      image: "https://media.istockphoto.com/id/482305605/pt/foto/crepes-com-chocolate-creme.jpg?s=612x612&w=0&k=20&c=aFhHXs-cQEuADU1fJyE3JkDYgrHneuUcWCAQxeJ4zIc="
    },
    {
      id: 2,
      name: "Buffet Pizza",
      location: "São Paulo SP",
      description: "Buffet de pizza com variedade e sabor incrível para festas.",
      price: 280,
      image: "https://media.istockphoto.com/id/521403691/pt/foto/quente-feito-em-casa-pizza-de-pepperoni.jpg?s=612x612&w=0&k=20&c=KWGroPbutn4ruhgedMeQ6vvPhFULRrnCMtV5coxr1AI="
    }
  ];
  const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");

function renderProducts(filteredProducts = products) {
  productList.innerHTML = "";

  if (filteredProducts.length === 0) {
    productList.innerHTML = `<p style="text-align:center; color:#666;">Nenhum resultado encontrado</p>`;
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>${product.location}</p>
      <p>${product.description}</p>
      <p>R$${product.price.toFixed(2)}</p>
    `;
    productList.appendChild(card);
  });
}

searchInput.addEventListener("input", (event) => {
  const text = event.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(text) ||
    p.location.toLowerCase().includes(text)
  );
  renderProducts(filtered);
});

renderProducts();
const nomeSalvo = localStorage.getItem("nomeUsuario");
if (nomeSalvo) {
  document.getElementById("username").textContent = `Hey, ${nomeSalvo}!`;
}
