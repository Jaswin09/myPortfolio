document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ---------- Hobbies: filter + click interaction ----------
const filters = document.querySelectorAll(".filter");
const hobbyCards = document.querySelectorAll(".hobby-card");

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const cat = btn.dataset.filter;
    hobbyCards.forEach(card => {
      const show = cat === "all" || card.dataset.cat === cat;
      card.classList.toggle("is-hidden", !show);
      card.classList.remove("is-showing");
      if (show) {
        card.classList.add("visible");
        void card.offsetWidth; // restart animation
        card.classList.add("is-showing");
      }
    });
  });
});

hobbyCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.remove("pop");
    void card.offsetWidth;
    card.classList.add("pop");
  });
});
