let pass = document.getElementById("pass");
let confirmPass = document.getElementById("confirm");
let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    if (pass.value != confirmPass.value) {
        pass.style.borderColor = "red";
        confirmPass.style.borderColor = "red";
        alert("Passwords do not match.");
    } else {
        pass.style.borderColor = "#E5E7EB";
        confirmPass.style.borderColor = "#E5E7EB";
    }
})