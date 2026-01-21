(function () {
  emailjs.init("YOUR_PUBLIC_KEY_HERE");
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
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
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

// Flatpickr initialization
flatpickr("#event-date", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  minDate: "today", // Prevents booking in the past
});
