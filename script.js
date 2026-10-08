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
    const name = String(new FormData(form).get("name") || "").trim();
    const email = String(new FormData(form).get("email") || "").trim();
    const topic = String(new FormData(form).get("topic") || "").trim();

    if (!name || !email || !topic) {
      event.preventDefault();
      note.textContent = "Please fill in your name, email, and how we can help.";
      return;
    }

    note.textContent = "Sending your message...";
  });
}


