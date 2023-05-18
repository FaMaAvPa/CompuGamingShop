// Variables globales
let productList = [
  {
    name: 'Notebook Gamer',
    price: 1159314,
    image: './img/NotebookGamer.png'
  },
  {
    name: 'Procesador AMD Ryzen 5 3600',
    price: 137826,
    image: './img/AMDRyzen5.png'
  }
];

let cartItems = [];

// Cargar la lista de productos al iniciar la página
window.addEventListener('DOMContentLoaded', function() {
  loadProductList();
});

// Cargar la lista de productos desde el Storage
function loadProductList() {
  // Simulamos una llamada a una API o base de datos para obtener la lista de productos
  // En este caso, utilizamos la lista predefinida en la variable productList

  let productContainer = document.getElementById('product-list');
  productContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar los productos

  // Recorrer la lista de productos y agregar cada uno al DOM
  productList.forEach(function(product, index) {
    let productItem = document.createElement('div');
    productItem.classList.add('product-item');

    let productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productItem.appendChild(productImage);

    let productName = document.createElement('h3');
    productName.textContent = product.name;
    productItem.appendChild(productName);

    let productPrice = document.createElement('p');
    productPrice.textContent = '$' + product.price.toFixed(2);
    productItem.appendChild(productPrice);

    let buyButton = document.createElement('button');
    buyButton.classList.add('buy-button');
    buyButton.textContent = 'Comprar';
    buyButton.addEventListener('click', function() {
      addToCart(product);
    });
    productItem.appendChild(buyButton);

    productContainer.appendChild(productItem);
  });
}

// Agregar un producto al carrito de compras
function addToCart(product) {
  cartItems.push(product);
  updateCart();
}

// Actualizar el carrito de compras en el DOM
function updateCart() {
  let cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = ''; // Limpiar la lista antes de agregar los elementos

  // Recorrer los productos en el carrito y agregar cada uno al DOM
  cartItems.forEach(function(item) {
    let cartItem = document.createElement('li');
    cartItem.textContent = item.name;
    cartItemsList.appendChild(cartItem);
  });

  // Calcular el total de la compra
  var totalPrice = cartItems.reduce(function(acc, item) {
    return acc + item.price;
  }, 0);

  // Actualizar el total en el DOM
  let totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = 'Total: $' + totalPrice.toFixed(2);
}

// Pagar los productos en el carrito
document.getElementById('checkout-button').addEventListener('click', function() {
  // Simulamos una función de pago
  // En este caso, simplemente vaciamos el carrito
  cartItems = [];
  updateCart();
});