const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");
const form = document.querySelector("#contact-form");
const note = document.querySelector("#form-note");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (form && note) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const data = new FormData(form);
        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const topic = String(data.get("topic") || "").trim();

        if (!name || !email || !topic) {
            note.textContent = "Please fill in your name, email, and how we can help.";
            return;
        }

        // Show a temporary loading message while sending
        note.textContent = "Sending your message...";

        // Send the data quietly to Web3Forms in the background
        fetch("https://web3forms.com", {
            method: "POST",
            body: data
        })
        .then(response => {
            if (response.ok) {
                form.reset();
                note.textContent = "Thank You! One of our team members will reach out to you shortly.";
            } else {
                note.textContent = "Something went wrong. Please try again later.";
            }
        })
        .catch(error => {
            note.textContent = "Network error. Please check your internet connection.";
        });
    });
}

