const firstImage = document.querySelector(".first-img");
const secondImage = document.querySelector(".second-img");
const btn = document.querySelector("button");

console.log(firstImage.src);

btn.addEventListener("click", () => {
  //[a, b] = [b, a]; ---> swapping of 2 numbers without third variable 
  [firstImage.src, secondImage.src] = [secondImage.src, firstImage.src];
});
