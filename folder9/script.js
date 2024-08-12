const textArea = document.querySelector("textarea");
const counter = document.querySelector("#counter");

textArea.addEventListener("input", () => {
  counter.textContent = textArea.value.length;
});
