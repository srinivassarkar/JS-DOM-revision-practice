const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  // Calculate the percentage of the page scrolled
  const scrollPosition = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / documentHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});
