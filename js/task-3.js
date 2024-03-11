const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", listenerInput);
function listenerInput(event) {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue !== "") {
    nameOutput.textContent = trimmedValue;
  }
}
//annotation==============================================================================================
// Використання оригінального ВмістуТексту: Використання змінної text для збереження оригінального textContent елементу nameOutput є зайвим. В завданні зазначено, що якщо введення порожнє або містить лише пробіли, має відображатися "Анонім". Отже, немає потреби зберігати та використовувати спочатку заданий текст привітання, оскільки воно має бути встановлене напряму на "Анонім", коли це застосовується.
//???????????????????????????????????????????????????????????????????????????????????????????????????????
// без збереження оригінального тексту працює некоректно - якщо написати будь що в інпут, а потім витерти - то залишається перший символ в спані.

// BEFORE =================================================================================================

// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");
// const text = nameOutput.textContent;

// nameInput.addEventListener("input", listenerInput);
// function listenerInput(event) {
//   const trimmedValue = event.currentTarget.value.trim();
//   if (trimmedValue !== "") {
//     nameOutput.textContent = trimmedValue;
//   } else {
//     nameOutput.textContent = text;
//   }
// }
