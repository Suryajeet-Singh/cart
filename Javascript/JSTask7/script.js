function validate() {
    if (checkName() && checkAge() && checkEmail() && checkPhoneNumber() && checkCity() && checkHobby()) {
        alert("The form is submitted")
        return true;
    }
    else {
        checkName();
        checkAge();
        checkEmail();
        checkPhoneNumber();
        checkCity();
        checkHobby();
        alert("The form in invalid")
        return false;
    }
}
document.getElementById("name").onblur = function () {
    checkName();
}
document.getElementById("age").onblur = function () {
    checkAge();
}
document.getElementById("email").onblur = function () {
    checkEmail();
}
document.getElementById("phone_number").onblur = function () {
    checkPhoneNumber();
}
document.getElementById("city").onchange = function () {
    checkCity();
}
document.getElementsByClassName("hobbies").onblur = function () {

    checkHobby();
}

function checkName() {
    var name_full = document.getElementById("name").value;
    if (name_full == "") {
        errmsg("err_name", "Name cannot be empty")
        return false;
    }
    else if (name_full != "") {
        errmsg("err_name", "")
        return true;
    }
}

function checkAge() {
    var valid_Age = document.getElementById("age").value;
    if (valid_Age == "") {
        errmsg("err_age", "Age should not be empty")
        return false;
    }
    else if (valid_Age <= 18) {
        errmsg("err_age", "Age should not be less than 18")
        return false;
    }
    else if (isNaN(valid_Age)) {
        errmsg("err_age", "*Please Enter number for age!")
        return false;
    }
    else if (valid_Age > 18) {
        errmsg("err_age", "")
        return true;
    }
}
function checkEmail() {
    var validRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = document.getElementById('email').value;
    if (validEmail == "") {
        errmsg("err_email", "Email address cannot be empty");
        return false;
    }

    else if (validEmail != "" || validEmail.match(validRegEx)) {
        errmsg("err_email", "")
        return true;
    }
    else {
        errmsg("err_email", "Email is invalid");
        return false;
    }
}
function checkPhoneNumber() {
    var validphone_number = document.getElementById("phone_number").value;
    if (validphone_number == "") {
        errmsg("err_number", "Phone Number cannot be empty!!")
        return false;
    }
    else if (isNaN(validphone_number) || validphone_number.length != 10) {
        errmsg("err_number", "Phone number is invalid")
        return false;
    } else {
        errmsg("err_number", "")
        return true;
    }
}
function checkCity() {
    var validCity = document.getElementById("city").value;
    if (validCity == "") {
        errmsg("err_city", "City cannot be empty")
        return false;
    } else if (validCity != "") {
        errmsg("err_city", "")
        return true;
    }
}
function checkHobby() {
    var validHobby = document.querySelectorAll(`input[name="hobbies"]:checked`)
    console.log("Suryajeet ", validHobby.length)
    if (validHobby.length == 0) {
        errmsg("err_hobby", "Hobby should be selected")
        return false;
    }
    else if (validHobby != 0) {
        errmsg("err_hobby", "")
        return true;
    }
}
function errmsg(eleId, msg) {
    document.getElementById(eleId).innerHTML = msg;

}