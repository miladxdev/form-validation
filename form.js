let signupBtn = document.getElementById("signup");
let signupElement = document.getElementById("signup-container");
let backBtn = document.getElementById("back-btn");

signupBtn.addEventListener("click", () => {
  signupElement.style.left = "0";
});

backBtn.addEventListener("click", () => {
  signupElement.style.left = "100%";
});
