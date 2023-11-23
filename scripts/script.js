function validateForm() {

    var errorP = document.getElementById("errorMessage");
    errorP.innerHTML = ""; // Clear previous error messages

    if (isFieldEmpty("fname", "First name must be filled out")) {
        return;
    }

    if (isFieldEmpty("lname", "Last name must be filled out")) {
        return;
    }

    if (isFieldEmpty("email", "Email must be filled out")) {
        return;
    }

    if (isFieldEmpty("password", "Password must be filled out")) {
        return;
    }
}

function isFieldEmpty(fieldName, errorMessage) {
    let fieldValue = document.forms["signform"][fieldName].value;
    if (fieldValue.trim() == "") {
        var errorP = document.getElementById("errorMessage");
        errorP.innerHTML = errorMessage;
        return true;
    }
    return false;
}