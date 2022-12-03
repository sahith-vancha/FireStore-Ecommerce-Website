let total = 0;

let countItem = 0;
function addItem(item, num) {
  countItem++;
  //console.log(item);
  newEl = createNode(item, num);
  cartTotal(num);
}

function createNode(item, num) {
  let productInCart = document.createElement("productInCart");

  const x = document.getElementById("productGroup");
  const y = x.getElementsByTagName("li");
  productInCart.innerHTML = y[item].innerHTML;
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  //productInCart.setAttributeNode('button', 'removeButton');
  productInCart.appendChild(removeButton);
  document.getElementById("cartID").appendChild(productInCart);
  alert("Item added");

  removeButton.addEventListener("click", function (event) {
    subtractTotal(num);
    productInCart.remove();
    document.getElementById("total").innerHTML = total;
  });

  return productInCart;
}

function cartTotal(num) {
  total = total + num;

  document.getElementById("total").innerHTML = total;
}

function subtractTotal(num) {
  total = total - num;
}

function getTotal() {
  return total;
}

function checkout() {
  alert("Thank you for your purchase!");
}
function openCart() {
  document.getElementById("cartSection").style.display = "block";
  document.getElementById("cartSection").style.width = "50%";
  document.getElementById("cartSection").style.height = "100%";
  document.getElementById("cartSection").style.position = "absolute";
  document.getElementById("cartSection").style.textAlign = "center";
  document.getElementById("cartSection").style.overflow = "scroll";
  //document.getElementById("cartSection").style.overflowX = "scroll";
  document.getElementById("cartSection").style.backgroundColor =
    "rgba(255,255,255,100)";
  let x = window.matchMedia("(max-width: 800px)");
  mobileFunction(x);
}
function closeCart() {
  document.getElementById("cartSection").style.width = "0";
  document.getElementById("cartSection").style.display = "none";
}
