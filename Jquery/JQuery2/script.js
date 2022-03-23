$(document).ready(function (){
    
    $("#toggle").change(function(){
        if($(this).is(":checked")){
            $("#password").attr("type","text")
        }else{
            $("#password").attr("type","password")

        }
    })
})