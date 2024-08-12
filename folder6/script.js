// const homeTab = document.querySelector("#homeTab");
// const aboutTab = document.querySelector("#aboutTab");
// const contactTab = document.querySelector("#contactTab");

// const homePara = document.querySelector(".homePara");
// const aboutPara = document.querySelector(".aboutPara");
// const contactPara = document.querySelector(".contactPara");

// const allTexts = document.querySelectorAll("p");

// function removeAllText() {
//   allTexts.forEach((allText) => {
//     allText.style.display = "none";
//   });
// }

// homeTab.addEventListener("click", () => {
//   removeAllText();
//   homePara.style.display = "block";
// });

// aboutTab.addEventListener("click", () => {
//   removeAllText();
//   aboutPara.style.display = "block";
// });

// contactTab.addEventListener("click", () => {
//   removeAllText();
//   contactPara.style.display = "block";
// });

const tabs = document.querySelectorAll(".tab");
const texts = document.querySelectorAll("p");
// console.log(tabs);

// texts[0].style.display = "block";

function hideAllText() {
  texts.forEach((text) => {
    text.style.display = "none";
  });
}

tabs.forEach((div, index) => {
  div.addEventListener("click", () => {
    hideAllText();
    texts[index].style.display = "block";
  });
});
