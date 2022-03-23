$(document).ready(function(){
    
      $("p").css("background-color","red");
      $("#btn1").click(function(){
          $("#first").hide();
      });
      $(".btn2").click(function(){
        $("#first").show();
    });
    $(".btn3").click(function(){
        $(".second").remove();
    });
    $(".btn4").click(function(){
        $("#div1").empty();
    });
    var substr = $("#div1").val();
    console.log(substr)
});