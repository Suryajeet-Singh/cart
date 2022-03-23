function myFunction(name, age, isBestFriend, favouriteColor) {

    this.name = name;
    this.age = age;
    this.isBestFriend = isBestFriend;
    this.favouriteColor = favouriteColor;
    this.yellowFavourite = function () {
        var flag = 0;
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

}

var obj1 = new myFunction('Surya', 26, "true", ["Yellow", , "Blue"]);
var obj2 = new myFunction('Nitin', 23, "false", ["Yellow", "Red", "Blue"]);
var obj3 = new myFunction('Abhi', 27, "false", ["Orange", "Red"]);
var obj4 = new myFunction('Ankit', 21, "true", ["Yellow", "Sky", "Blue"]);
var obj5 = new myFunction('Veronica', 56, "true", ["Pink", "Green", "Blue", "Cyan"]);

var arr = [obj1, obj2, obj3, obj4, obj5];

document.write(`<table><tr><th>Sr.No.</th><th>Name</th><th>Age</th><th>isBestFriend</th>`);


let length_of_color = [];
arr.forEach(element => {
    // element.favouriteColor.length;
    length_of_color.push(element.favouriteColor.length);
})
length_of_color.sort(function (a, b) { return b - a })
for (var j = 1; j <= length_of_color[0]; j++) {
    var favouriteColor = "Favourite Color" + j;
    document.write(`<th>${favouriteColor}</th>`)
}
document.write(`<th>yellowFavourite</th></tr>`);
for(var i = 0; i < arr.length; i++){

    document.write(`<tr><th>${i+1}</th><td>${arr[i].name}</td><td>${arr[i].age}</td><td>${arr[i].isBestFriend}</td>`)
    let _favouriteColor = arr[i].favouriteColor;

    let final = [];
    arr.forEach(element => {

        final.push(element.favouriteColor.length)

    })
    final.sort((a, b) => b - a)

    for (let c = 0; c < final[0]; c++) {

        document.write(`<td>${_favouriteColor[c] || ""}</td>`);

    }

    document.write(`<td>${arr[i].yellowFavourite()}</td>`)
};