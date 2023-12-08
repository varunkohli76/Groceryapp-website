fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(product => {
        return disdetal(product)
    })
    .catch(error => {
        return console.error('Error fetching product details:',error)
    });

function disdetal(product) {
    const prodit = document.getElementById('product-details');
    prodit.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <div id="quantity-container">
          <label for="quantity">Quantity:</label>
          <button onclick="dec()">-</button>
          <input id="quantity" value="1" min="1" max="10">
          <button onclick="inc()">+</button>
          <button class="btn" onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
        </div>
      `;
}

function inc() {
    const quanbox = document.getElementById('quantity');
    if (quanbox.value < 10) {
        quanbox.value++;
    }
}
function dec() {
    const quanbox = document.getElementById('quantity');
    if (quanbox.value > 3) {
        quanbox.value--;
    }
}