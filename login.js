// change form
const changeToSignup = document.getElementById("signup-form");
const changeToLogIn = document.getElementById("login-form");
changeToSignup.onclick = function() {
    const loginForm = document.querySelector(".login");
    loginForm.classList.remove("active");
    const signupForm = document.querySelector(".signup");
    signupForm.classList.add("active");
}
changeToLogIn.onclick = function() {
    const loginForm = document.querySelector(".login");
    loginForm.classList.add("active");
    const signupForm = document.querySelector(".signup");
    signupForm.classList.remove("active");
}
// regex for username
const username =document.querySelector("#username-s");
username.onchange = function(e) {
    if (this.value.match(/^[a-zA-Z0-9@_-]{3,30}$/)) {
        this.classList.remove("error");
        this.classList.add("success");
}else{
    this.classList.add("error");
    this.classList.remove("success");
}
}
// regex for Email addresses
const Email =document.querySelector("#email");

Email.onchange = function() {
    if (this.value.match(/^[a-z0-9.-_]+@[a-z0-9-]+\.[a-z]{2,10}$/ig)) {
        this.classList.remove("error");
        this.classList.add("success");
}else{
    this.classList.add("error");
    this.classList.remove("success");
}
}
// regex for password validation 
const Password =document.querySelector("#password-s");

Password.onchange = function() {
    if (this.value.match(/^[a-z0-9.-_A-Z]{8,30}$/ig)) {
        this.classList.remove("error");
        this.classList.add("success");
}else{
    this.classList.add("error");
    this.classList.remove("success");
}
}