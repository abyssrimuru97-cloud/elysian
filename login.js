// Password Show / Hide

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";
        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});

// Login Form

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const button = document.querySelector("button");

    button.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Verifying...';

    button.disabled = true;

    setTimeout(() => {

        alert("👑 Welcome to Élysian VIP Lounge!");

        window.location.href = "index.html";

    }, 1800);

});