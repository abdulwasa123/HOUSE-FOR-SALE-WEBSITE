let logIn = document.getElementById("login");
let signup = document.getElementById("signup");

let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let confirmPassword = document.getElementById("confirmpassword");
let title = document.getElementById("loginText");
let signUpMessage = document.querySelector(".message");
let loginForm = document.querySelector(".form");



logIn.addEventListener("click", () => {
    firstName.style.display = "none" 
    lastName.style.display = "none"  
    confirmPassword.style.display = "none"
    title.textContent = "Login"
    signUpMessage.textContent = "Login now";
    loginForm.style.height = "18rem"
    
});


signup.addEventListener("click", () => {
    firstName.style.display = "block" 
    title.textContent = "Register";
    lastName.style.display = "block"   
    confirmPassword.style.display = "block"
    signUpMessage.textContent = "SignUp Now";
    loginForm.style.height = "25rem"

});