var html = `<ul id="ul_list"><li class="li_items">Cold Cereal</li><li class="li_items">Icecream</li><li class="li_items">Honey</li><li class="li_items">Oliveoil</li></ul>`;
document.write(html)
const x1 = document.createElement("Button");
const y1 = document.createTextNode("Add Button");
x1.appendChild(y1)
document.body.appendChild(x1);
x1.className = "add_button";

const x2 = document.createElement("Button");
const y2 = document.createTextNode("Remove Button");
x2.appendChild(y2)
document.body.appendChild(x2);
x2.className = "remove_button";

var count = 1;
document.getElementsByClassName("add_button")[0].addEventListener("click", function () {
    if (count == 1) {
        var newNode = document.createElement("LI");
        var newItem = document.createTextNode("Air Freshner");
        newNode.appendChild(newItem)
        document.getElementById("ul_list").appendChild(newNode);
        count = 0;
        var length_of_list = document.getElementById("ul_list").getElementsByTagName("LI").length;
        console.log(length_of_list)
        for (var i = 0; i < length_of_list; i++) {
           
            var listItems = document.getElementsByTagName("LI")[i];
            listItems.setAttribute("class","food")
            console.log(listItems[i]);
            
            // listItems.className += "food"
        }
       
    }

})
document.getElementsByClassName("remove_button")[0].addEventListener("click", function () {

    var list = document.getElementById("ul_list");
    // var list_List = document.querySelector("[class^=food]")
if(list.hasChildNodes()){
    list.removeChild(list.lastChild);
}
})



