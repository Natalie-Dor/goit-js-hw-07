const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", listenerInput);
function listenerInput(event) {
  const trimmedValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
}
