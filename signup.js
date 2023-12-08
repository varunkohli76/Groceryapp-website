function validation() {
    let firstname = document.getElementById('fname').value;
    let lastname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('pwd').value;
    let confirmPassword = document.getElementById('comfirmpwd').value;
    let uppercase = /[A-Z]/g;
    let specialcharacters = /[@,$,%,&,*]/g;
    let lowercase = /[a-z]/g;
    let numbers = /\d/g;

    function isFirstLetterCapital(str) {
        return /^[A-Z]/.test(str);
    }

    function showError(elementId, message) {
        let errorElement = document.getElementById(elementId);
        errorElement.innerHTML = message;
        errorElement.style.color = "red";
    }

    function clearError(elementId) {
        document.getElementById(elementId).innerHTML = "";
    }

    if (firstname == "") {
        showError('fnameerror', "Enter your Name");
        return false;
    } else if (firstname.trim() !== firstname) {
        showError('fnameerror', "No Spaces Allowed");
        return false;
    } else if (!isFirstLetterCapital(firstname)) {
        showError('fnameerror', "*Firstname must start with a capital letter");
        return false;
    } else {
        clearError('fnameerror');
    }
    if (lastname.trim() === "") {
        showError('lasterror', "Enter your Last Name");
        return false;
    } else if (lastname !== lastname.trim()) {
        showError('lasterror', "No Spaces Allowed");
        return false;
    } else {
        clearError('lasterror');
    }

    if (email.trim() === "") {
        showError('emaillerror', "Please Enter Your Email Address");
        return false;
    }
    else {
        clearError('emaillerror');
    }
    if (phone.trim() === "") {
        showError('phoneerror', "Please enter your phone number");
        return false;
    }
    else {
        clearError('phoneerror');
    }

    if (password.trim() === "") {
        showError('passworderror', " Enter the password");
        return false;
    } else if (!password.match(uppercase)) {
        showError('passworderror', "Password must contain UpperCase(A-Z)");
        return false;
    } else if (!password.match(lowercase)) {
        showError('passworderror', "Password must contain Lowercase(a-z)");
        return false;
    } else if (!password.match(specialcharacters)) {
        showError('passworderror', "Password must contain Special Characters(@,$,%,&,*)");
        return false;
    } else if (!password.match(numbers)) {
        showError('passworderror', "Password must contain number 0-9");
        return false;
    } else {
        clearError('passworderror');
    }
    if (confirmPassword.trim() === "") {
        showError('confirmpassworderror', "* Confirm Password is required");
        return false;
    } else if (password !== confirmPassword) {
        showError('confirmpassworderror', "* Passwords do not match");
    } else {
        clearError('confirmpassworderror');


        localStorage.setItem('fname', firstname);
        localStorage.setItem('lname', lastname);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('pwd', password);
        localStorage.setItem('confirmpwd', confirmPassword);
        document.getElementById('successMessage').innerHTML = "User Account created Successfully ";
        document.getElementById('successMessage').style.color = "green";
        setTimeout(function () {
            document.getElementById('successMessage').innerHTML = "";
            window.location = "index.html";

        }, 3000);
    }
    return false;
}


