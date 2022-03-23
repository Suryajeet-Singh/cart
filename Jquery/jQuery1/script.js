$(document).ready(function(){


$("#add_button").click(function(){
//  var textItem = document.getElementById("textItem").value;
 var textItem = $('#textItem').val();
console.log(textItem);
 if(textItem==""){
     alert("blank is not allowed")
 }
 else if(hasWhiteSpace(textItem))
 {
     alert("White space are not allowed");
 }
 else{
    $("ul").append("<li>"+textItem+"</li>")
    // $("li:last-child").addClass("listitem")
    $("li:last-child").attr("class","listitem")
    // document.getElementById("textItem").value = "";
    $('#textItem').val("");
 }

})
$("ul").on("click","li",function(){
    $(this).remove();
})

function hasWhiteSpace(textItem){
    var newtextItem = textItem.trim();
    for(var i = 0; i < newtextItem.length;i++){
        var textChar = newtextItem.charAt[i];
        if(textChar!=""){
            return false;
            break;
        }
    }
    return true;

}

});
