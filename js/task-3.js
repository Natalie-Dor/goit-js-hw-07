const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const text = nameOutput.textContent;

nameInput.addEventListener("input", listenerInput);
function listenerInput(event) {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue !== "") {
    nameOutput.textContent = trimmedValue;
  } else {
    nameOutput.textContent = text;
  }
}
