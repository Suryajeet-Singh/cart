
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

document.write(`<table><tr><th>Category</th><th>Subcategory</th><th>ID</th>
<th>Name</th><th>Brand</th></tr>`);
for(let i in products){
    for(let j in products[i]){
        for(let k of products[i][j]){
            document.write(`<tr><th>${i}</th><td>${j}</td><td>${k.id}</td><td>${k.name}</td><td>${k.brand}</td>`)
        }
    }
}
document.write(`</table>`)
document.write(`<table><tr><th>Category</th><th>Subcategory</th><th>ID</th>
<th>Name</th><th>Brand</th></tr>`);
for(let i in products){
    for(let j in products[i]){
        for(let k of products[i][j]){
            console.log(Object.keys(products)[0])
            document.write(`<tr><th>${i}</th><td>${j}</td><td>${k.id}</td><td>${k.name}</td><td>${k.brand}</td>`)
        }
    }
}
document.write(`</table>`)