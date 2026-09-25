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

    form.reset();
    note.textContent =
      "Thanks. This demo form stays on your device. Connect a form service when you are ready to receive messages.";
  });
}
