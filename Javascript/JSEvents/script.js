function myfunction1(){
    var x = document.getElementById("mySelect").value;
    document.getElementById("para1").innerHTML = "This is Function 3 :" + x
}
function myfunction2(){
    alert("Are you sure to open this page")
}
function myfunction3(){
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window Width : " +w+" , Window Height :"+h;
    document.getElementById("para").innerHTML = "This is Function 2 :" + txt
}
function myfunction4(){
    var x = document.getElementById("texts");
    x.value = x.value.toUpperCase();
}
function myfunction5(y){
y.style.background = "Red"
}
function myfunction6(){
    alert("Working with Key up")
}
function myfunction7(){
    alert("Working with Key press")
}
function myfunction8(){
    alert("Working with Key down")
}
function myfunction9(){
   let a = prompt("Please enter your name!!!")
   console.log(a)
}
function myfunction10(){
    var x = document.getElementById("para3");
    console.log(x);
    x.className = "show";
    console.log(x.className)
    setTimeout(() =>{
    
        x.className = x.className.replace("show","");
    },3000)

}