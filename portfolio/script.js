const menu = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");
if (menu) {
  menu.addEventListener("click", () => {
    const open = links.style.display === "flex";
    links.style.display = open ? "" : "flex";
    if (!open) {
      links.style.position = "absolute";
      links.style.top = "76px";
      links.style.left = "0";
      links.style.right = "0";
      links.style.padding = "20px 24px";
      links.style.background = "rgba(7,9,13,.96)";
      links.style.borderBottom = "1px solid rgba(255,255,255,.09)";
      links.style.flexDirection = "column";
    }
  });
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity:0, transform:"translateY(18px)"},{opacity:1, transform:"translateY(0)"}],
        {duration:650, easing:"cubic-bezier(.2,.8,.2,1)", fill:"forwards"}
      );
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.08});
document.querySelectorAll(".section, .experience-card, .skill-card, .education-card, .contact-card").forEach(el => {
  el.style.opacity = "0";
  observer.observe(el);
});
