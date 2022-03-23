let obj = [];
let id = 0;
$.ajax({
    url: "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json",
    method: "GET",
    success: function (result) {
        obj = JSON.parse(result);
        
        all_movies();
    }
});

function all_movies(){
    $("#form_data").css("display", "none");
    $("#delete").css("display", "none");
    $("#search").css("display", "none");
    id = 0;
    let table = `<table id="table">`;
    table += `<tr><th>S.NO.</th><th>Title</th><th>Year</th><th>ImdbRating</th><th>Image</th></tr>`;

    for (var i in obj) {
        id += 1;
        table += `<tr id="${id}"> <td>${id}</td><td>${obj[i].title}</td> <td>${obj[i].year}</td> <td>${obj[i].imdbRating}</td>  <td><img src="${obj[i].posterurl}" alt="image not found"></td></tr>`;

    }
    table += `</table>`;
    $("#table_all").html(table);
}

function add_movie() {
    $("#form_data").css("display", "block");
    $("#delete").css("display", "none");
    $("#search").css("display", "none");
}
function remove_data() {
    $("#form_data").css("display", "none");
    $("#delete").css("display", "block");
    $("#search").css("display", "none");
}
function search_data_file() {
    $("#form_data").css("display", "none");
    $("#delete").css("display", "none");
    $("#search").css("display", "block");
}

function del() {
    let get_val = $("#del_data").val();
    $(`#${get_val}`).remove();
}


function update_data() {
    let movie_title = $("#movie_title").val();
    let movie_year = $("#movie_year").val();
    let imdb_rating = $("#imdb_rating").val();
    let imgfile = document.getElementById('imgfile').files[0].name;

    let new_movie = {
        "title": movie_title,
        "year": movie_year,
        "imdbRating": imdb_rating,
        "posterurl": imgfile
    }
    obj.push(new_movie);
    id += 1;
    let update_table = `<tr id="${id}"> <td>${id}</td><td>${new_movie.title}</td> <td>${new_movie.year}</td> <td>${new_movie.imdbRating}</td>  <td><img src="${new_movie.posterurl}"></td></tr>`;
    $("#table").append(update_table);

}

let search_table = `<table id="search_table">`;


function search_data() {
    let id = 1;
    $("#table_all").css("display", "none");
    $("#search_table").html("");
    let thr = `<tr><th>S.NO.</th><th>Title</th><th>Year</th><th>ImdbRating</th><th>Image</th></tr></table>`;
    $("#search_table").append(thr);
    let search_val = $("#search_val").val().toLowerCase();
    let search_val_length = search_val.length;
    for (var i in obj) {

        let title = obj[i].title.toLowerCase();

        let search = title.substr(0, search_val_length);


        if (search_val == search) {

            update_table = `<tr> <td>${id}</td><td>${obj[i].title}</td> <td>${obj[i].year}</td> <td>${obj[i].imdbRating}</td>  <td><img src="${obj[i].posterurl}"></td></tr>`;
            $("#search_table").append(update_table);
            id += 1;
        }

    }

}
// searched_table += `</table>`;
$("#search_tbl").html(search_table);
$("#search_val").on("keyup", search_data);