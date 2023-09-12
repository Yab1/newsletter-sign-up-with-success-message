const errorMsg = document.querySelector("label");
const userInput = document.querySelector("input");
const userEmail = document.querySelector("#userEmail");
const dialog = document.querySelector("dialog");

const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

const errorMsgStyle = ["after:hidden"];
const inputStyle = ["bg-light-tomato", "border-tomato", "text-tomato"];
const dialogStyle = ["flex"];

const submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("click", (e) => handleSubmit(e, userInput.value));

const dismissButton = document.querySelector("#dismiss-btn");
dismissButton.addEventListener("click", () => {
  dialog.close();
  removeStyle(dialog, dialogStyle);
  userInput.value = "";
});

function handleSubmit(e, email) {
  e.preventDefault();
  const isValidEmail = emailRegex.test(email);
  if (isValidEmail) {
    addStyle(errorMsg, errorMsgStyle);
    removeStyle(userInput, inputStyle);
    dialog.showModal();
    addStyle(dialog, dialogStyle);
    userEmail.innerHTML = email;
  } else {
    removeStyle(errorMsg, errorMsgStyle);
    addStyle(userInput, inputStyle);
  }
}

function addStyle(element, styles) {
  element.classList.add(...styles);
}

function removeStyle(element, styles) {
  element.classList.remove(...styles);
}
