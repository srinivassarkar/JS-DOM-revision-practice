const h3 = document.querySelector("h3");
const progressBar = document.querySelector("#progress");

let count = 0;

let progressBarTimer = setInterval(() => {
  if (count === 100) {
    h3.style.opacity = 1;
    clearInterval(progressBarTimer);
  }

  count++;
  console.log(count);

  progressBar.style.width = count + "%";
}, 50);
