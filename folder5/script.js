const numberCount = document.querySelector(".count");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

let count = 0;
let intervalId 
function myTimer() {
  count++;
  numberCount.textContent = count;
  console.log(count);
}

startBtn.addEventListener("click", () => {
  intervalId = setInterval(myTimer, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  
});
