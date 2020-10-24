const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("btn");
const errorFirstName = document.getElementById("error-firstName");
const errorLastName = document.getElementById("error-lastName");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const contain = document.getElementById("contain");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstName.value === "") {
    errorFirstName.style.visibility = "visible";
  }
  if (lastName.value === "") {
    errorLastName.style.visibility = "visible";
  }

  const mailFormat = "@";

  if (email.value === "") {
    errorEmail.style.visibility = "visible";
  } else if (!email.value.match(mailFormat)) {
    contain.style.display = "block";
  }

  if (password.value === "") {
    errorPassword.style.visibility = "visible";
  }

  console.log([firstName.value, lastName.value, email.value, password.value]);

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
});
