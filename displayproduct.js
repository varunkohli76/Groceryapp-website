const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(product => displayProductDetails(product))
  .catch(error => console.error('Error:', error));

function displayProductDetails(product) {
  const detailsContainer = document.getElementById('productDetails');
  let output = "";
  
  output += `<div class='product'>
    <img src="${product.image}" alt="${product.title}"><br>
    <p class="title">${product.title}</p>
    <p class="description">${product.description}</p>
    <p class="category">${product.category}</p>
    <p class="price"><span>Rs</span>${product.price}</p>
    <div class="quantity-container">
    <label for="quantity" class="drop">Quantity:</label>
    <select name="quantity" id="quantity">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select><br>
    <button type="button" onclick="addToCart(${product.id})">ADD TO CART</button>
  </div>`;
  detailsContainer.innerHTML = output;
}
function addToCart(productId){
  let selquantity=document.getElementById('quantity').value;
  // cart.addToCart(productId,selquantity);
  window.location.href=`cart.html?productId=${productId}&quantity=${selquantity}`;
}


