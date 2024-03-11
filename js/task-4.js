// UPDATE======================================
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();
  if (!email || !password) {
    return alert("All form fields must be filled in");
  } else {
    const profile = {
      email: email,
      password: password,
    };
    console.log(profile);
    event.currentTarget.reset();
  }
}
