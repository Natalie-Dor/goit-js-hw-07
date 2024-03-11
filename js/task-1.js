// const categories = document.querySelectorAll(".item");
// console.log("Number of categories: " + categories.length);

// const titlesCategories = document.querySelectorAll("h2");
// titlesCategories.forEach((title) => {
//   console.log("Category:" + title.textContent);
//   console.log("Elements:", title.nextElementSibling.children.length);
// });

// UPDATE
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
