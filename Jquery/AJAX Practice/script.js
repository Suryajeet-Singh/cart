$(document).ready(function () {
  
    $("button").click(function () {

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET",
            success: function (result) {
            return  result;
            }
        }).done(function(data){
            document.write(`<table><tr><th>UserId</th><th>ID</th><th>Title</th></tr>`);
            for(var i in data){
               
                console.log(data[i].title);
                document.write(`<tr><td>${data[i].userId}</td><td>${data[i].id}</td><td>${data[i].title}</td></tr>`)
            }
            document.write(`</table>`)
                
        }) 

    });

   
});