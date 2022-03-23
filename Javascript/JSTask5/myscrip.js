function myfunction(){

        var x = document.getElementById("change_text");

        if(x.value == "" || x.value.trim()==""){
            document.getElementById("new_text").innerHTML = "User";
        }else{
        document.getElementById("new_text").innerHTML = x.value;
        }
    
}
