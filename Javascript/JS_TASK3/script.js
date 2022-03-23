document.write(`<table>`);
document.write(`<tr><th>Sr.No.</th><th>Name</th><th>Age</th><th>isBestFriend</th>`)

const mainObj = [
    {
        name: 'Surya', age: 25, isBestFriend: true, favouriteColor: ["Yellow", "Red", "Blue"],
        yellowFavourite: function () {
            flag = 0;
            for (let i = 0; i < this.favouriteColor.length; i++) {
                if ("Yellow" == this.favouriteColor[i]) {
                    flag = 1;
                }
            }
            if (flag == 1) {
                return "Yellow is my favourite Color";
            }
            else {
                return "Yellow is not my favourite color"
            }
        }
    },
    {
        name: 'Ankit', age: 24, isBestFriend: false, favouriteColor: ["Pink", "Red"],
        yellowFavourite: function () {
            flag = 0;
            for (let i = 0; i < this.favouriteColor.length; i++) {
                if ("Yellow" == this.favouriteColor[i]) {
                    flag = 1;
                }
            }
            if (flag == 1) {
                return "Yellow is my favourite Color";
            }
            else {
                return "Yellow is not my favourite color"
            }
        }
    },
    {
        name: 'Abhishek', age: 25, isBestFriend: true, favouriteColor: ["Green", "Red", "Blue"],
        yellowFavourite: function () {
            flag = 0;
            for (let i = 0; i < this.favouriteColor.length; i++) {
                if ("Yellow" == this.favouriteColor[i]) {
                    flag = 1;
                }
            }
            if (flag == 1) {
                return "Yellow is my favourite Color";
            }
            else {
                return "Yellow is not my favourite color"
            }
        }
    },
    {
        name: 'Nitin', age: 23, isBestFriend: false, favouriteColor: ["Yellow", "Blue", "Pink", "Cyan","Red"],
        yellowFavourite: function () {
            flag = 0;
            for (let i = 0; i < this.favouriteColor.length; i++) {
                if ("Yellow" == this.favouriteColor[i]) {
                    flag = 1;
                }
            }
            if (flag == 1) {
                return "Yellow is my favourite Color";
            }
            else {
                return "Yellow is not my favourite color"
            }
        }
    },
    {
        name: 'Nihal', age: 27, isBestFriend: true, favouriteColor: ["Yellow", "Dark"],
        yellowFavourite: function () {
            flag = 0;
            for (let i = 0; i < this.favouriteColor.length; i++) {
                if ("Yellow" == this.favouriteColor[i]) {
                    flag = 1;
                }
            }
            if (flag == 1) {
                return "Yellow is my favourite Color";
            }
            else {
                return "Yellow is not my favourite color"
            }
        }
    }

]

let final = [];
mainObj.forEach(element => {

    final.push(element.favouriteColor.length)


})
console.log("Himnshu",final)
final.sort((a, b) => b - a)
for (var a = 1; a <= final[0]; a++) {
    favouriteColor = "Favourite Color " + a;
    document.write(`<th>${favouriteColor}</th>`);

}
document.write(`<th>YellowFavourite</th></tr>`);


for (let j = 0; j < mainObj.length; j++) {

    document.write(`<tr><th>${j + 1}</th>`);

    let _name = mainObj[j].name;
    document.write(`<td>${_name}</td>`);
    let _age = mainObj[j].age;
    document.write(`<td>${_age}</td>`);
    let _isBestFriend = mainObj[j].isBestFriend;
    document.write(`<td>${_isBestFriend}</td>`);





    let _favouriteColor = mainObj[j].favouriteColor;

    let final = [];
    mainObj.forEach(element => {

        final.push(element.favouriteColor.length)

    })
    final.sort((a, b) => b - a)
    console.log("Its My Love", final)
    for (let c = 0; c < final[0]; c++) {

        document.write(`<td>${_favouriteColor[c] || ""}</td>`);

    }



    document.write(`<td>${mainObj[j].yellowFavourite()}</td></tr>`);
}



// function yellowFavourite(_favouriteColor) {
//     flag = 0;
//     for (let i = 0; i < _favouriteColor.length; i++) {
//         if ("Yellow" == _favouriteColor[i]) {
//             flag = 1;
//         }
//     }
//     if (flag == 1) {
//         return "Yellow is my favourite Color";
//     }
//     else {
//         return "Yellow is not my favourite color"
//     }
// }

document.write(`</table>`);
