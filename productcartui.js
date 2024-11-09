const product = [
    { name: "SG", price: 49300, img: "sg.webp", qty: 1, total: 0 },
    { name: "MRF", price: 28500, img: "MRF.webp", qty: 1, total: 0 },
    { name: "Cosco", price: 2750, img: "cosco.png", qty: 1, total: 0 },
    { name: "Gray-Nicholas", price: 50259, img: "nicholas.webp", qty: 1, total: 0 },
    { name: "DSC", price: 71249, img: "dsc.jpg", qty: 1, total: 0 },
    { name: "Adidas", price: 33999, img: "adidas.jpg", qty: 1, total: 0 },
    { name: "SG Leather Cricket Ball (Red) ", price: 1249, img: "ball.jpg", qty: 1, total: 0 },
    { name: "TT Wooden Cricket Stumps with 2 Bails (White Colour) Set of 3", price:459, img: "stumps.jpg", qty: 1, total: 0 },
    { name: "Batting Gloves", price:859, img: "gloves.jpg", qty: 1, total: 0 },
    { name: "Premium Kashmir Willow Cricket Kit", price:9480, img: "kit.webp", qty: 1, total: 0 }
  ];

  let selectedProducts = [];

  function displayProducts() {
    const container = document.getElementById("productbag");
    container.innerHTML = "";

    for (const x of product) {
      container.innerHTML += `
        <div class="product-card">
            <img src="${x.img}" alt="${x.name}" />
            <span>${x.name}</span>
            <span>₹ ${x.price}</span>
            <button onclick='addToCart(${JSON.stringify(x)})'>Add</button>
        </div>`;
    }
  }

  function addToCart(product1) {
    selectedProducts.push(product1);
    localStorage.setItem("Products", JSON.stringify(selectedProducts));
    document.getElementById("productcount").innerHTML = selectedProducts.length;
    document.getElementById("productcount").style.display = "block";
  }

  displayProducts();
  $(document).ready(function () {
    $("#search").on("keyup", function () {
      const value = $(this).val().toLowerCase();
      $(".product-card").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });