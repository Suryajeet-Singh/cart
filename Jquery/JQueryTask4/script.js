$(document).ready(function () {
    $(".category").click(function () {
        $(this).css("background-color", "red");
        $(".category").not(this).css("background-color", "white")
        $(".shop_item").show();
        var btn_val = $(this).val();

        var btn_class = "." + btn_val;

        $(".shop_item").not("" + btn_class + "").hide();
        var newSum = updateTotal(btn_val);
        var matched = $(""+btn_class+"");

       document.getElementsByClassName(".total_products")[0].innerText = matched.length;
       document.getElementsByClassName(".total_price")[0].innerText = 'Rs .' + newSum;
    })
})
        var sum = 0;
        var obj = [
            { category: "Mobile", title: "Iphone11", image: "images/product1.jpeg", price: 490 },
            { category: "Laptop", title: "Asus", image: "images/product2.jpeg", price: 490 },
            { category: "Laptop", title: "Apple", image: "images/product3.jpeg", price: 490 },
            { category: "Mobile", title: "oneplus", image: "images/product4.jpg", price: 490 },
            { category: "Shirts", title: "Dennis Lingo", image: "images/product5.jpeg", price: 490 },
            { category: "Shirts", title: "Dennis Lingo", image: "images/product6.jpeg", price: 490 },
            { category: "Shirts", title: "Roadster", image: "images/product7.jpeg", price: 490 },
            { category: "Mobile", title: "Samsung", image: "images/product8.jpg", price: 490 },
            { category: "Shoes", title: "Sparx", image: "images/product9.jpeg", price: 490 },
            { category: "Shoes", title: "Puma", image: "images/product10.jpg", price: 490 }
        ]

        show_products();
        function show_products() {
            html = `<section class="container"><div class="shop_items">`
            for (var i = 0; i < obj.length; i++) {
                html += `<div class="shop_item ${obj[i].category}">`
                html += `<span class="item_title ${obj[i].title}"></span>`
                html += `<img class="item_image" src="${obj[i].image}">
                <div class="item_details">`;
                html += `<span class="item_price">Rs .${obj[i].price}</span>
                <button class="add_btn" type="button">Add To cart</button></div></div>`
                sum += obj[i].price;
            }
            html += `<div class="total"><strong class="total_title">Total Products</strong>
            <p class="total_products">${obj.length}</p><strong class="total_title">
            <span id="partition">||</span>Total Products :</strong><p class="total_price">${sum}</p>`
            html += `</div></div></section>`
            document.write(html)
        }


        function updateTotal(categoryClass) {
            sum = 0;
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].category == categoryClass) {
                    sum += obj[i].price;
                }
            }return sum
        }




