function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const body = document.body;

const changeColor = () => {
  textColor.textContent = getRandomHexColor();
  body.style.backgroundColor = textColor.textContent;
};

changeColorBtn.addEventListener("click", changeColor);
// ??????????????????????????????????
// у 12 строці textColor.textContent = змінна, в яку збережено результат функції getRandomHexColor
//???????????????????????????????????/
// Узгодженість при виклику функції: Хоча в цьому конкретному випадку це не викликає помилку, розгляньте можливість збереження результату getRandomHexColor() у змінну перед використанням його для оновлення як текстового вмісту textColor, так і фонового кольору body. Це забезпечить узгодженість кольору між обома елементами і допоможе уникнути потенційних розбіжностей, які могли б виникнути через двічі виклик getRandomHexColor(), якщо ви в майбутньому модифікуєте функцію.
