const signup = document.querySelector(".sign-up");
const success = document.querySelector(".success");
const form = document.getElementById("form");
const userEmailDisplay = document.getElementById("user-email");
const successBtn = document.getElementById("success-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredEmail = event.target.querySelector("#email").value;
  event.target.querySelector("#email").value = "";
  userEmailDisplay.textContent = enteredEmail;
  signup.dataset.state = "hidden";
  success.dataset.state = "visible";
});

successBtn.addEventListener("click", () => {
  signup.dataset.state = "visible";
  success.dataset.state = "hidden";
});
