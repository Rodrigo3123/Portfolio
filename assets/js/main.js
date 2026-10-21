// Portafolio · Rodrigo Gamero Serrano
// Sin dependencias. Mejora progresiva: el sitio funciona sin JavaScript.

document.documentElement.classList.add("js");

// Año del pie de página
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("menu");

if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".sr-only").textContent = open ? "Cerrar menú" : "Abrir menú";
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
  });
}

// Visor de imagen ampliada con <dialog>.
// Sin JavaScript, el enlace abre la imagen completa en otra pestaña.
const lightbox = document.querySelector(".lightbox");

if (lightbox && typeof lightbox.showModal === "function") {
  const lbImg = lightbox.querySelector("img");
  const lbCaption = lightbox.querySelector(".lightbox-caption");

  document.querySelectorAll(".gallery-main").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const img = link.querySelector("img");
      lbImg.src = link.href;
      lbImg.alt = img.alt;
      lbCaption.textContent = img.alt;
      lightbox.showModal();
    });
  });

  // Cerrar al hacer clic fuera de la imagen
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });
}
