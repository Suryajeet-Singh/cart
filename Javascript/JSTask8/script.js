document.write(`<section class="container">`)
document.write(`<h1 class="heading_class">This is Shopping Cart</h1>`)
document.write(`<div class="shop_items">`)
var prod1 = new products("Shirt1", "images/shirt.jpeg", 599.99);
var prod2 = new products("Shirt2", "images/Shirt2.jpeg", 999.99);
var prod3 = new products("Shirt3", "images/shirt3.jpeg", 799.99);
var prod4 = new products("Apple", "images/laptop.jpeg", 999.99);
var prod5 = new products("Asus", "images/laptop2.jpeg", 5699);
var prod6 = new products("Iphone11", "images/iphone.jpeg", 59);
var prod7 = new products("OnePlus", "images/oneplus.jpg", 4999);
var prod8 = new products("Xiomi", "images/xiomi.jpg", 11999.99);
var prod9 = new products("Iphone11", "images/iphone.jpeg", 599);
var prod10 = new products("OnePlus", "images/oneplus.jpg", 4999);
document.write(`</div`)
document.write(`</section`)
function products(product_name, product_image, product_price) {
    document.write(`<div class="shop_item">`);
    document.write(`<span class="item_title">${product_name}</span>`);
    document.write(`<img class="item_image" src="${product_image}">`);
    document.write(`<div class="item_details">`);
    document.write(`<span class="item_price">Rs. ${product_price}</span>`);
    document.write(`<button type="button" class="add_btn">Add to cart</button>`);
    document.write(`</div>`);
    document.write(`</div>`);
}
document.write(`<section class="container">`)
document.write(`<h1 class="heading_class">Cart</h1>`)
document.write(`<div class="cart_row">`)
document.write(`<span class="cart_header">Name</span>`)
document.write(`<span class="cart_header">Image</span>`)
document.write(`<span class="cart_header">Price</span>`)
document.write(`<span class="cart_header">Quantity</span>`)
document.write(`</div>`)
document.write(`<div class="cart_items">`)
document.write(`<div class="cart_row">`)
document.write(`<div class="cart_item">`)
document.write(`<span class="cart_item_title"></span>`)
document.write(`<span class="cart_price"></span>`)
document.write(`</div>`)
document.write(`</div>`)
document.write(`</div>`)
document.write(`<div class="total">`)
document.write(`<strong class="total_title">Total</strong>`);
document.write(`<span class="total_price">Rs.0</span>`)
document.write(`</div>`)
document.write(`</div>`)
document.write(`</section>`)
document.write(`<button type="button" class="btn_purchase">Purchase</button>`)

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready_function)
} else {
    ready_function();
}
function ready_function() {
    var addToCartButtons = document.getElementsByClassName('add_btn');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
    }

    var quantityInputs = document.getElementsByClassName('cart_quantity_input')
    for (var i = 0; i < quantityInputs.length; i++) {
        // console.log("Quantity", i)
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }

    var removeCartItemsButtons = document.getElementsByClassName('remove')
    for (var i = 0; i < removeCartItemsButtons.length; i++) {
        // console.log("Remove", i)
        var button = removeCartItemsButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    document.getElementsByClassName("total")[0].style.display = "none";
    document.getElementsByClassName("btn_purchase")[0].style.display = "none";
    document.getElementsByClassName("heading_class")[1].style.display = "none";
    document.getElementsByClassName("cart_row")[0].style.display = "none";
    document.getElementsByClassName("btn_purchase")[0].addEventListener('click', purchaseClicked)
}
var purchasebtn = 0;


function purchaseClicked() {
    alert("Thanks For Shopping from here")
    var cartItems = document.getElementsByClassName('cart_items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
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
    console.log("Update cart cart Item Container" + cartItemContainer);
    var cartRows = cartItemContainer.getElementsByClassName('cart_row');
console.log("CART ROW ",cartRows)
    var total = 0;
    for (var i = 1; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart_price')[0];
        console.log("PRICE ELEMENT", priceElement);
        var quantityElement = cartRow.getElementsByClassName('cart_quantity_input')[0];
        console.log("QUANTITY ELEMENT", quantityElement);
        var price = parseFloat(priceElement.innerText.replace('Rs.', ''));
        console.log("PRIIICEs", price);
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    console.log("Total", total);
    document.getElementsByClassName('total_price')[0].innerText = 'Rs.' + total;
}

