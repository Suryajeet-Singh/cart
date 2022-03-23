
function validate() {
    if (checkFirstName() && checkLastName() && checkEmail() && checkPassword() && checkConfirmPassword()) {
        alert("The form is submitted")
        return true;
    }
    else {
        checkFirstName();
        checkLastName();
        checkEmail();
        checkPassword();
        checkConfirmPassword();
        alert("The form in invalid")
        return false;
    }
}



$("#first_name").on("blur", checkFirstName)
$("#last_name").on("blur", checkLastName)
$("#email").on("blur", checkEmail)
$("#password").on("blur", checkPassword)
$("#confirm_password").on("blur", checkConfirmPassword);





function checkFirstName() {
    var name_first = $("#first_name").val();
    var rxgx = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/

    if (name_first == "") {
        $("#err_first_name").html("First Name cannot be empty")
        $("#err_first_name").show();
        return false;
    }
    else if (name_first != "" && name_first.match(rxgx)){
        $("#err_first_name").html("")
        $("#err_first_name").show();
        return true;
    }else {
        $("#err_first_name").html("First Name is invalid")
        $("#err_first_name").show();
        return false;
    }
}

function checkLastName() {
    var name_last = $("#last_name").val();
    var rxgx = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/
   
    if (name_last == "") {
        $("#err_last_name").html("Last Name cannot be empty")
        $("#err_last_name").show();
        return false;
    }
    else if (name_last != "" && name_last.match(rxgx)) {
        $("#err_last_name").html("")
        $("#err_last_name").show();
        return true;
    }
    else {
        $("#err_last_name").html("Last Name is invalid")
        $("#err_last_name").show();
        return false;
    }
}
function checkEmail() {
    var validRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = $('#email').val();
    if (validEmail == "") {
        $("#err_email").html("Email cannot be empty")
        $("#err_email").show();
        return false;
    }

    else if(validEmail != "" && validEmail.match(validRegEx)) {
        $("#err_email").html("")
        $("#err_email").show();
        return true;
    }
    else {
        $("#err_email").html("Email is invalid")
        $("#err_email").show();
        return false;
    }
}
function checkPassword() {
    var password = $("#password").val();
    if(password == ""){
        $("#err_password").html("Password should not be blank")
        $("#err_password").show();
        return false;
    }
    else if(password.length < 6) {
        $("#err_password").html("Password should be greater than 6")
        $("#err_password").show();
        return false;
    }
    else {
        $("#err_password").html("")
        $("#err_password").show();
        return true;
    }

}
function checkConfirmPassword() {
    var confirm_password = $("#confirm_password").val();
    var pass = $("#password").val();
    if(confirm_password == ""){
        $("#err_confirm_password").html("Password should not be blank")
        $("#err_confirm_password").show();
        return false;
    }
   else if(confirm_password.length < 6) {
        $("#err_confirm_password").html("Password should be greater than 6")
        $("#err_confirm_password").show();
        return false;
    }
    else if(confirm_password !== pass) {
        $("#err_confirm_password").html("Password did not match")
        $("#err_confirm_password").show();
        return false;
    }
    else {
        $("#err_confirm_password").html("")
        $("#err_confirm_password").show();
        return true;
    }
}