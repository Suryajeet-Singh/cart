
function myFunction(srNo, name, age, isBestFriend, favouriteColor) {
    this.srNo = srNo;
    this.name = name;
    this.age = age;
    this.isBestFriend = isBestFriend;
    this.favouriteColor = favouriteColor;
    document.write(`<tr><th>${srNo}</th><td>${name}</td><td>${age}</td><td>${isBestFriend}</td>`);
    for (var j = 0; j < favouriteColor.length; j++) {
        document.write(`<td>${favouriteColor[j] || ""}</td>`)

    }

    document.write(`<td>${yellowFavourite(favouriteColor)}</td></tr>`)
}
function yellowFavourite(favouriteColor) {
    flag = 0;
    for (let i = 0; i < favouriteColor.length; i++) {
        if ("Yellow" == favouriteColor[i]) {
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
document.write(`<table border=2>`);
document.write(`<tr><th>Sr.No.</th><th>Name</th><th>Age</th><th>isBestFriend</th>`)


const obj1 = new myFunction(1, 'Surya', 26, "true", ["Yellow", "Blue"]);
const obj2 = new myFunction(2, 'Nitin', 23, "false", ["Yellow", "Red", "Blue"]);
const obj3 = new myFunction(3, 'Abhi', 27, "false", ["Orange", "Red"]);
const obj4 = new myFunction(4, 'Ankit', 21, "true", ["Yellow", "Sky", "Blue"]);
const obj5 = new myFunction(5, 'Veronica', 56, "true", ["Pink", "Green", "Blue", "Cyan"]);


var arr = [obj1, obj2, obj3, obj4, obj5]
let length_of_array = []
for (let c in arr) {
    length_of_array.push(arr[c].favouriteColor.length)
}
length_of_array.sort((a, b) => b - a)
// console.log("Second Array", length_of_array)
for (var d = 1; d <= length_of_array[0]; d++) {
    favouriteColor = "Favourite Color " + d;
    console.log(favouriteColor);
    document.write(`<th>${favouriteColor}</th>`)
}
document.write(`<th>Yellow Color</th><tr>`)


document.write(`</table>`);