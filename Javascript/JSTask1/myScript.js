let firstName = "Gaurav";
let lastName = "Mandhyan";
var fullName = firstName+ " " +lastName;
var length = fullName.length;
var shippping = 7;
var subTotal = length * 5;
var grandTotal = subTotal + shippping;
document.write(`<h1>Order Details</h1>`);
document.write(`<p>Hello ${firstName}, please check your order:</p>`);
document.write(`<table>`);

document.write(`<tr><td>Name:</td><td>${fullName}</td></tr>`);
document.write(`<tr><td>Total letters:</td><td>${length}</td></tr>`);
document.write(`<tr><td>Subtotal:</td><td>$${subTotal}</td></tr>`);
document.write(`<tr><td>Shipping:</td><td>$${shippping}</td></tr>`);
document.write(`<tr><td>Grandtotal:</td><td>$${grandTotal}</td></tr>`);

document.write(`</table>`);
document.write(`<a href="#">Pay now</a>`);