const hotel =
{
    name: "Taj",
    price: 240,
    discount: 15,
    discount_rate: function () {
        newPrice = this.price * (this.discount / 100);
        finalPrice = this.price - newPrice;
        return finalPrice;
    }

};

const currentDate = new Date();
// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const nextExpiry = new Date();
nextExpiry.setTime(currentDate.getTime() + 7 * 86400000);
  var res = nextExpiry.toString();
// var x = nextExpiry.toLocaleString('en-US', options);


//     let xarr = x.split(" ");
//     let day = xarr[0];

// let date = xarr[2];
// console.log(date);
// let month = xarr[1].
// console.log(month);
// let year = xarr[3];
// console.log(year);
var day = res.slice(0,3);
var date = res.slice(8,10);
var month = res.slice(4,7);

var year = res.slice(11,15);
 switch (day) {
    case "Mon": day = "Monday";
        break;
    case "Tue": day = "Tuesday";
        break;
    case "Wed": day = "Wednesday";
        break;
    case "Thu": day = "Thursday";
        break;
    case "Fri": day = "Friday";
        break;
    case "Sat": day = "Saturday";
        break;
    case "Sun": day = "Sunday";
        break;
};
switch (month) {
    case "Jan": month = "January";
        break;
    case "Feb": month = "February";
        break;
    case "Mar": month = "March";
        break;
    case "Apr": month = "April";
        break;
    case "May": month = "May";
        break;
    case "Jun": month = "June";
        break;
    case "Jul": month = "July";
        break;
    case "Aug": month = "August";
        break;
    case "Sep": month = "September";
        break;
    case "Oct": month = "October";
        break;
    case "Nov": month = "November";
        break;
    case "Dec": month = "December";
        break;
};
console.log(day)
console.log(month)
const offerDate = date + " " + month + " " + year;
console.log(offerDate)
document.write(`<div class="card">`);
document.write(`<div class="header">`);
document.write(`<h1> ${hotel.name} </h1>`);
document.write(`<h3> Room Rent = Rs.${hotel.price.toFixed(2)}</h3>`);
document.write(`<h3>Discount Rent = Rs.${hotel.discount_rate()}</h3>`);

document.write(`</div>`);
document.write(`<div class="content">`);
document.write(`<p>Offer expires next ${day}</p>`);
document.write(`<p>(${offerDate})</p></div>`);
document.write(`</div>`);