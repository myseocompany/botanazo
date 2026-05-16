const toggle = document.querySelector("[data-nav-toggle]");
const links = document.querySelector("[data-nav-links]");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("is-open");
  });
}

const reviewsSection = document.querySelector("[data-reviews-section]");
const reviewsGrid = document.querySelector("[data-reviews-grid]");

if (reviewsSection && reviewsGrid) {
  fetch("./reviews.json")
    .then((response) => response.json())
    .then((reviews) => {
      if (!Array.isArray(reviews) || reviews.length === 0) return;

      reviewsGrid.innerHTML = reviews
        .slice(0, 3)
        .map(
          (review) => `
            <article class="review-card">
              <h3>${review.author}</h3>
              <p>${review.text}</p>
              <p class="small-note">${review.rating}/5 en Google Maps</p>
            </article>
          `
        )
        .join("");

      reviewsSection.hidden = false;
    })
    .catch(() => {});
}
