const onlyButton = document.getElementsByTagName("button");
const onlyButton2 = document.getElementById("the-only-button");
const passwordInput = document.getElementById("pass");
const confirmPass = document.getElementById("confirm"); 
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telInput = document.querySelector("#phone");

onlyButton2.addEventListener("click", () => {
    consolation();
});

confirmPass.addEventListener("input", e => {
    if (confirmPass.value !== passwordInput.value) {
        confirmPass.setCustomValidity("confirm pass must be equal to password");
    } else {
        confirmPass.setCustomValidity("");
    }
})

function consolation() {
    console.log("clicked");
}



console.log("LOGGED ON?");