
var products = {
    "Electronics": {
        "Television": [
            {
                "id": "PR001",
                "name": "MAX-001",
                "brand": "Samsung"
            },
            {
                "id": "PR002",
                "name": "BIG-301",
                "brand": "Bravia"
            },
            {
                "id": "PR003",
                "name": "APL-02",
                "brand": "Apple"
            }
        ],
        "Mobile": [
            {
                "id": "PR004",
                "name": "GT-1980",
                "brand": "Samsung"
            },
            {
                "id": "PR005",
                "name": "IG-5467",
                "brand": "Motorola"
            },
            {
                "id": "PR006",
                "name": "IP-8930",
                "brand": "Apple"
            }
        ]
    },
    "Jewelry": {
        "Earrings": [
            {
                "id": "PR007",
                "name": "ER-001",
                "brand": "Chopard"
            },
            {
                "id": "PR008",
                "name": "ER-002",
                "brand": "Mikimoto"
            },
            {
                "id": "PR009",
                "name": "ER-003",
                "brand": "Bvlgari"
            }
        ],
        "Necklaces": [
            {
                "id": "PR010",
                "name": "NK-001",
                "brand": "Piaget"
            },
            {
                "id": "PR011",
                "name": "NK-002",
                "brand": "Graff"
            },
            {
                "id": "PR012",
                "name": "NK-003",
                "brand": "Tiffany"
            }
        ]
    }
}

document.write(`<h3>List of all category</h3>`)
// First Table
document.write(`<table><tr><th>Category</th><th>Subcategory</th><th>ID</th>
<th>Name</th><th>Brand</th></tr>`);
for (let i in products) {
    console.log(i)
    console.log(products[i])
    for (let j in products[i]) {
        // console.log(j)
        for (let k of products[i][j]) {
            document.write(`<tr><td>${i}</td><td>${j}</td><td>${k.id}</td><td>${k.name}</td><td>${k.brand}</td></tr>`)
        }
    }
}
document.write(`</table><br><br>`)

// Second Table
document.write(`<h3>List of all category of mobile</h3>`)
document.write(`<table><tr><th>Category</th><th>Subcategory</th><th>ID</th>
<th>Name</th><th>Brand</th></tr>`);
for (let i in products) {
    if (i == 'Electronics') {
        for (let j in products[i]) {
            if (j == 'Mobile') {
                for (let k of products[i][j]) {
                    document.write(`<tr><td>${i}</td><td>${j}</td><td>${k.id}</td>
                <td>${k.name}</td><td>${k.brand}</td></tr>`);

                }
            }
        }
    }
}
document.write(`</table><br><br>`)


// Third Table
document.write(`<h3>List of all brand of samsung</h3>`)

for (let i in products) {
    if (i == 'Electronics') {
        for (let j in products[i]) {
            if(j == 'Mobile'||'Television') {
                for (let k of products[i][j]) {
                    if(k.brand == 'Samsung'){
      
                        document.write(`<table><tr><th>Product ID:</th><td>${k.id}</td></tr>
<tr><th>Product Name:</th><td>${k.name}</td></tr><tr><th>Subcategory:</th><td>${j}</td></tr><tr><th>Category:</th><td>${i}</td></tr>`);


                    }
                }
            }
        }
    }
}
document.write(`</table><br><br>`)

// Fourth Table
document.write(`<h3>Delete product with ID = " PR003 "</h3>`)
document.write(`<table><tr><th>Category</th><th>Subcategory</th><th>ID</th>
<th>Name</th><th>Brand</th></tr>`);
for (let i in products) {
    for (let j in products[i]) {
        for (let k of products[i][j]) {
         if(k.id == 'PR003'){
             continue;
         }
        document.write(`<tr><td>${i}</td><td>${j}</td><td>${k.id}</td><td>${k.name}</td><td>${k.brand}</td></tr>`)
    }
    }
}
document.write(`</table><br><br>`)

document.write(`<h3>Update product name = "BIG-555" with  ID = "PR002"</h3>`)
document.write(`<table><tr><th>Category</th><th>Subcategory</th><th>ID</th>
<th>Name</th><th>Brand</th></tr>`);
for (let i in products) {
    for (let j in products[i]) {
        for (let k of products[i][j]) {
         if(k.id == 'PR003'){
             continue;
         }
         else if(k.id == 'PR002'){
            var str = "";
            k.name = str + 'BIG-555';
// console.log('String ', k.name)
         }
        document.write(`<tr><td>${i}</td><td>${j}</td><td>${k.id}</td><td>${k.name}</td><td>${k.brand}</td></tr>`)
    }
    }
}
document.write(`</table><br><br>`)
