const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];

const galleryContainerEl = document.querySelector(".gallery");
const elements = images.map((img) => {
  const itemEl = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.src = img.url.slice(1, length - 1);
  imgEl.alt = img.alt;
  imgEl.width = 300;

  itemEl.append(imgEl);
  itemEl.style.display = "flex, column, center";
  return itemEl;
});
galleryContainerEl.style.listStyleType = "none";

galleryContainerEl.append(...elements);
