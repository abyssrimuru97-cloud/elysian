// Password Show / Hide

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        confirmPassword.type = "text";

        togglePassword.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";
        confirmPassword.type = "password";

        togglePassword.innerHTML =
        '<i class="fa-solid fa-eye"></i>';

    }

});

// Signup Form

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(e){

    e.preventDefault();

    if(password.value !== confirmPassword.value){

        alert("❌ Passwords do not match!");
        return;

    }

    const button = document.querySelector("button");

    button.disabled = true;

    button.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

    setTimeout(() => {

        alert("🎉 VIP Account Created Successfully!");

        window.location.href = "login.html";

    },2000);

});