document.write('<section class="container">');
document.write('<h2 class="heading_class">Select your Product</h2>');
document.write('<div class="shop_items">');
var prod1 = new products("IPhone11", "product1.jpeg", 659.99);
var prod2 = new products("Apple", "product2.jpeg", 599.99);
var prod3 = new products("Asus", "product3.jpeg", 999.00);
var prod4 = new products("OnePlus", "product4.jpg", 1199.99);
var prod5 = new products("Roadster", "product5.jpeg", 1300.99);
var prod6 = new products("Roadster1", "product6.jpeg", 30990.99);
var prod7 = new products("Roadster2", "product7.jpeg", 54650.99);
var prod8 = new products("Mobile", "product8.jpg", 64000.99);
var prod9 = new products("Shoes", "product9.jpeg", 3100.99);
var prod10 = new products("Shoes2", "product10.jpg", 2999.99);
document.write("</div>");
document.write("</section>");
function products(product_title, product_link, product_price) {
    document.write('<div class="shop_item">');
    document.write('<span class="item_title">' + product_title + '</span>');
    document.write('<img class="item_image" src=' + product_link + '>');
    document.write('<div class="item_details">');
    document.write('<span class="item_price">Rs. ' + product_price + '</span>');
    document.write('<button class="add_btn" type="button">ADD TO CART</button>');
    document.write('</div>');
    document.write("</div>");
}
document.write('<section class="container">');
document.write('<h2 class="heading_class">CART</h2>');
document.write('<div class="cart_row">');
document.write('<span class="cart_header">NAME</span>');
document.write('<span class="cart_header">IMAGE</span>');
document.write('<span class="cart_header">PRICE</span>');
document.write('<span class="cart_header">QUANTITY</span>');
document.write('</div>');
document.write('<div class="cart_items">');
document.write('<div class="cart_row">');
document.write('<div class="cart_item">');
document.write('<span class="cart_item_title"></span>');
document.write('<span class="cart_price"></span>');
document.write('</div>');
document.write('</div>');
document.write('</div>');
document.write('<div class="total">');
document.write('<strong class="total_title">Total</strong>');
document.write('<span class="total_price">Rs.0</span>');
document.write('</div>');
document.write('</div>');
document.write('</section>');
document.write('<button class="btn_purchase" type="button">PURCHASE</button>');

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready_function);
} else {
    ready_function();
}
function ready_function() {
    var addToCartButtons = document.getElementsByClassName('add_btn');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
    var removeCartItemButtons = document.getElementsByClassName('remove');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart_quantity_input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

 
    document.getElementsByClassName("total")[0].style.display = "none";
    document.getElementsByClassName("btn_purchase")[0].style.display = "none";
    document.getElementsByClassName("heading_class")[1].style.display = "none";
    document.getElementsByClassName("cart_row")[0].style.display = "none";
    document.getElementsByClassName('btn_purchase')[0].addEventListener('click', purchaseClicked);
}
var purchasebtn = 0;
function purchaseClicked() {
    alert('Thank you for buying our products!!!');
    var cartItems = document.getElementsByClassName('cart_items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
    purchasebtn = 1;
}
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}
function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('item_title')[0].innerText;
    var price = shopItem.getElementsByClassName('item_price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('item_image')[0].src;
    document.getElementsByClassName("heading_class")[1].style.display = "block";
    document.getElementsByClassName("cart_row")[0].style.display = "block";
    document.getElementsByClassName("total")[0].style.display = "block";
    document.getElementsByClassName("btn_purchase")[0].style.display = "block";
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart_row');
    var cartItems = document.getElementsByClassName('cart_items')[0];
    var flag = 1;
    var index = 0;
    var numberOfItems = document.getElementsByClassName('cart_item').length;
    for (var i = 0; i < numberOfItems; i++) {
        var existingItem = document.getElementsByClassName("cart_item_title")[i].innerText;
        if (title == existingItem) {
            flag = 0;
            index = i;
            break;
        }
    }
    console.log(index);
    if (flag == 0 && purchasebtn == 0) {
        var prevquantity = document.getElementsByClassName("cart_quantity_input")[index-1].value;
        prevquantity++;
        document.getElementsByClassName("cart_quantity_input")[index-1].value = prevquantity;
        updateCartTotal();
    }else if (flag == 0 && purchasebtn == 1) {
        var prevquantity = document.getElementsByClassName("cart_quantity_input")[index].value;
        prevquantity++;
        document.getElementsByClassName("cart_quantity_input")[index].value = prevquantity;
        updateCartTotal();
    }
     else {
        var cartRowContents = `
    <div class="cart_item">
        <span class="cart_item_title">${title}</span>
        <img class="cart_item_image" src="${imageSrc}" width="100" height="100">
    <span class="cart_price">${price}</span>
        <input class="cart_quantity_input" type="number" value="1">
        <button class="remove" type="button">REMOVE</button>
    </div>`;
        cartRow.innerHTML = cartRowContents;
        cartItems.append(cartRow);
        cartRow.getElementsByClassName('remove')[0].addEventListener('click', removeCartItem);
        cartRow.getElementsByClassName('cart_quantity_input')[0].addEventListener('change', quantityChanged);
        updateCartTotal();
    }
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart_items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart_row');
    var total = 0;
    for (var i = 1; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart_price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart_quantity_input')[0];
        var price = parseFloat(priceElement.innerText.replace('Rs.', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total_price')[0].innerText = 'Rs.' + total;
}