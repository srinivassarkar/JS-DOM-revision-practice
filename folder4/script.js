const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");
const inputs = document.querySelector("input");
const ul = document.querySelector("ul");
let li;

addBtn.addEventListener("click", () => {
  if (inputs.value.trim() === "") {
  } else {
    li = document.createElement("li");
    li.textContent = inputs.value;
    ul.appendChild(li);
    inputs.value = "";
  }
});

removeBtn.addEventListener("click", () => {
  ul.removeChild(li);
});
