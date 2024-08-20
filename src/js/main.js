const signup = document.querySelector(".sign-up");
const success = document.querySelector(".success");
const form = document.getElementById("form");
const emailInput = form.querySelector("#email");
const userEmailDisplay = document.getElementById("user-email");
const emailError = document.getElementById("email-error");
const successBtn = document.getElementById("success-btn");

const [VISIBLE, HIDDEN] = ["visible", "hidden"];

const validateEmail = (email) => {
  const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const isValid = emailPattern.test(email) && email !== "";
  return isValid;
};

const showInputError = () => {
  emailInput.dataset.error = VISIBLE;
  emailError.dataset.error = VISIBLE;
};

const hideInputError = () => {
  emailInput.dataset.error = HIDDEN;
  emailError.dataset.error = HIDDEN;
};

emailInput.addEventListener("input", (event) => {
  event.preventDefault();
  const emailEl = event.target;
  console.log(emailEl);
  if (emailEl.hasAttribute("edited")) {
    const isValid = validateEmail(emailEl.value);
    console.log(emailEl.value, isValid);
    if (isValid) {
      hideInputError();
    } else {
      showInputError();
    }
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailEl = event.target.querySelector("#email");
  let email = emailEl.value;
  const isValid = validateEmail("");
  emailEl.setAttribute("edited", "");

  if (isValid) {
    console.log(email, isValid);
    emailEl.value = "";
    userEmailDisplay.textContent = email;
    signup.dataset.state = HIDDEN;
    success.dataset.state = VISIBLE;
  } else {
    showInputError();
  }
});

successBtn.addEventListener("click", () => {
  signup.dataset.state = VISIBLE;
  success.dataset.state = HIDDEN;
});
