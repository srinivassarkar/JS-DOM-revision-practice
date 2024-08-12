const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      alert("Please fill in all inputs");
      return;
    } else {
    }
  }

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  alert("Submitted");
});
