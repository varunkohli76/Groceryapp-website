function hello() {
    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('pwd');

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    if (email === "" && password === "") {
        document.getElementById('emailError').innerHTML = "Please Enter the email";
        document.getElementById('passwordError').innerHTML = "Please Enter the Password";
        document.getElementById('passwordError').style.color = "red";
        document.getElementById('emailError').style.color = "red";
    } 
    else if (email === storedEmail && password === storedPassword) {
        document.getElementById('Success-message').innerHTML = 'Login Successfully';
        document.getElementById('Success-message').style.color = "green";
        window.location = "home.html";
    }
    else {
        document.getElementById('emailError').innerHTML = "";
        document.getElementById('passwordError').innerHTML = "";
        document.getElementById('Success-message').innerHTML = "Invalid Credentials";
        document.getElementById('Success-message').style.color = "red";
    }
}