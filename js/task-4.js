const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitHandler);
const profile = {};

function submitHandler(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("All form fields must be filled in");
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }
  event.currentTarget.reset();
}
