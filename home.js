// let http=new XMLHttpRequest();
// http.open('get','https://fakestoreapi.com/products',true);
// http.send();

// http.onload=function(){
//     if (this.readyState==4 && this.status==200){

// let products=JSON.parse(this.responseText);

//    let output="";
//    for(let item of products){
//     output+=`<div class='product'><br>
//     <img src="${item.image}" alt="${item.image}"><br>
//     <p class="title">${item.title}</p>
//     <p class="desciption">${item.description}</p>
//     <p class="category">${item.category}</p>
//     <p class="price"><span>Rs</span>${item.price}</p>
//     <button type="button"href="product-detail">View Details</a></button>
// </div>
//   `;
//  }
//  document.querySelector('#productGrid').innerHTML=output;

//    }
// };


fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Sorry No Response');
    }
    return response.json();
  })
  .then(products => displayProducts(products))
  .catch(error => console.error('Error:', error));

function displayProducts(products){
  let output = "";
  for (let item of products) {
    output += `<div class='product'>
      <img src="${item.image}" alt="${item.image}"><br>
      <p class="title">${item.title}</p>
      <p class="description">${item.description}</p>
      <p class="category">${item.category}</p>
      <p class="price"><span>Rs</span>${item.price}</p>
     <a href="displayproduct.html?id=${item.id}" class="viewdetailsbtn">
        <button type="button">View Details</button>
    </a>
    </div>`;
  }
  document.querySelector('#productGrid').innerHTML = output;

  const viewdetailsbuttons = document.querySelectorAll('.viewdetailsbtn');
  viewdetailsbuttons.forEach(button => {
    button.addEventListener('click', showProductDetails);
  });
}
function showProductDetails(event) {
  const productId = event.currentTarget.closest('.product').dataset.id;
  window.location.href = `displayproduct.html?id=${productId}`;
}
