const loginForm = document.querySelector(".login-form");
const user = {};

loginForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    user.email = loginForm.elements.email.value;
    user.password = loginForm.elements.password.value;
    
    if (user.password === "" || user.email === "") {
        alert("ВАЖЛИВО!!! Усі поля повинні бути заповнені.")
    }
    else { 
    console.log(user);};
    event.currentTarget.reset();
};