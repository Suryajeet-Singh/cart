var html = `<select id="ul_list"><option class="li_items">Cold Cereal</option><option class="li_items">Icecream</option>
<option class="li_items">Honey</option><option class="li_items">Oliveoil</option></select>`;
document.write(html)
const x3 = document.createElement("input");
x3.setAttribute("type","text")
// const y3 = document.createTextNode("Add Button");
// x1.appendChild(y1)
document.body.appendChild(x3);

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

        var newNode = document.createElement("option");
        var newinput = document.getElementsByTagName("input").value;
        var newitem = document.createTextNode()
   console.log(newinput);
        newNode.appendChild(newinput)
        document.getElementById("ul_list").appendChild(newinput);
        count = 0;
        var length_of_list = document.getElementById("ul_list").getElementsByTagName("option").length;
        console.log(length_of_list)
        for (var i = 0; i < length_of_list; i++) {
           
            var listItems = document.getElementsByTagName("option")[i];
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



