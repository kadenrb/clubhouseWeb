// Handle Submit
document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const btn = document.getElementById("submit-btn");
    const originalText = btn.innerText;

    // Loading State
    btn.innerText = "SENDING...";
    btn.disabled = true;

    // Automatically grab all form data based on the name attributes
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch("https://clubhouse-reservation-proxy.kadenrb.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(result => {
        // Success Response
        btn.innerText = "SENT!";
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-success");
        document.getElementById("success-alert").classList.remove("d-none");

        this.reset();
        document.getElementById("count").textContent = "10"; // Reset guest display

        setTimeout(() => {
            btn.innerText = originalText;
            btn.disabled = false;
            btn.classList.add("btn-primary");
            btn.classList.remove("btn-success");
            document.getElementById("success-alert").classList.add("d-none");
        }, 4000);
    })
    .catch(error => {
        console.error("FAILED...", error);
        btn.innerText = "ERROR";
        btn.disabled = false;
        alert("Something went wrong. Please email us at info@clubhouserd.ca");
    });
});

flatpickr("#event-date", {
    enableTime: true,
    dateFormat: "Y-m-d h:i K",
    time_24hr: false,
    minuteIncrement: 30,
    minDate: "today",
    disableMobile: "true",
});

const range = document.querySelector("#range");
const count = document.querySelector("#count");

if (range && count) {
    range.addEventListener("input", (event) => {
        count.textContent = event.target.value;
    });
}