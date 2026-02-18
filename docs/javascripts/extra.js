document.addEventListener("DOMContentLoaded", function () {
  // Auto-apply AOS to common content elements
  document.querySelectorAll(
    ".md-content h1, .md-content h2, .md-content h3, .md-content p, .md-content table, .md-content pre, .md-content ul, .md-content ol, .md-content div[align='center']"
  ).forEach(function (el, index) {
    el.setAttribute("data-aos", "fade-up");
    el.setAttribute("data-aos-delay", (index % 5) * 100);
  });

  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100
  });
});
