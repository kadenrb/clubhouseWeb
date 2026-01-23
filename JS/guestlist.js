// Initialize EmailJS
(function () {
  emailjs.init("iv9fpiLFV4WiR59uz");
})();

// Handle Submit
document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the form from submitting normally

    // Get the submit button and store original text

    const btn = document.getElementById("submit-btn");
    const originalText = btn.innerText;

    // Button text for loading
    btn.innerText = "SENDING...";
    btn.disabled = true;

    // Send the form
    emailjs.sendForm("service_xsk1367", "template_usnubgm", this).then(
      function () {
        btn.innerText = "SENT!";
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-success");

        // Show the bootstrap alert
        document.getElementById("success-alert").classList.remove("d-none");

        // Clear form
        document.getElementById("booking-form").reset();

        // Reset button after 4 seconds
        setTimeout(() => {
          btn.innerText = originalText;
          btn.disabled = false;
          btn.classList.add("btn-primary");
          btn.classList.remove("btn-success");
          document.getElementById("success-alert").classList.add("d-none");
        }, 4000);
      },
      function (error) {
        console.log("FAILED...", error);
        ((btn.innerText = "ERROR,"), error.text);
        btn.disabled = false;
        alert("Something went wrong. Please email us directly.");
      },
    );
  });

flatpickr("#event-date", {
  enableTime: true,
  dateFormat: "Y-m-d h:i K",
  time_24hr: false,
  minuteIncrement: 30,
  minDate: "today",
  disableMobile: "true",
});

// Update guest count display
const range = document.querySelector("#range");
const count = document.querySelector("#count");

if (range && count) {
  range.addEventListener("input", (event) => {
    // Update the text on the screen
    count.textContent = event.target.value;
  });
}
