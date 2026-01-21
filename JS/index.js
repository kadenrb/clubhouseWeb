var timer; // Timer variable for the interval

// Function to advance to the next slide
function nextSlide() {
  $("#carousel").carousel("next");
}

// Function to go to the previous slide
function prevSlide() {
  $("#carousel").carousel("prev");
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timer); // Clear the previous timer
  timer = setInterval(nextSlide, 7000); // Set a new timer to advance to the next slide every 7 seconds
}

// Start the initial timer
$(document).ready(function () {
  resetTimer();
});
//code to change image to the glowing arcade machine
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelector(".arcade-icon").classList.toggle("highlighted");
  });
// code to enable a clickable navbar
document.querySelector(".navbar").addEventListener("click", function () {
  document.querySelector(".navbar-nav").classList.add("show");
});
function toggleHighlight(element) {
  element.classList.toggle("highlighted");
}
