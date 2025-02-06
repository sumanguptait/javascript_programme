// JS Form Program Example
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("userForm")
    .addEventListener("submit", handleFormSubmit);
});

const handleFormSubmit = (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = document.getElementById("age").value.trim();
  let message = document.getElementById("message");
  let result = document.getElementById("result");

  function validateInput() {
    if (name === "" || email === "" || age === "") {
      return "Please fill in all fields";
    }
    if (age < 0 || isNaN(age)) {
      return "Please enter a valid age";
    }
    if (!email.includes("@")) {
      return "Please enter a valid email";
    }
    return "";
  }
  let errorMessage = validateInput();
  if (errorMessage) {
    message.textContent = errorMessage;
    message.style.color = "red";
    return;
  }
  message.textContent = "";
  result.innerHTML = `<span style="color:green">
      Name:${name},Email: ${email}, Age: ${age}
    </span>`;

  document.getElementById("userForm").reset();
};
