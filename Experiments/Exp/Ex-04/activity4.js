//registration form
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let isValid = true;

    // Reset previous errors
    name.classList.remove("error");
    email.classList.remove("error");
    password.classList.remove("error");

    // Check Name
    if (name.value.trim() === "") {
        name.classList.add("error");
        isValid = false;
    }

    // Check Email
    if (email.value.trim() === "") {
        email.classList.add("error");
        isValid = false;
    }

    // Check Password
    if (password.value.trim() === "") {
        password.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("myForm").reset();
    } else {
        alert("Please fill all required fields!");
    }
});