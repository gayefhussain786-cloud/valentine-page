function burnHeart() {
  const heart = document.querySelector('.paper-heart, .folded-heart');
  if (!heart || heart.classList.contains('burning')) return;

  heart.classList.add('burning');

  // Create embers
  for (let i = 0; i < 15; i++) {
    const ember = document.createElement("div");
    ember.className = "ember";
    ember.style.left = Math.random() * 100 + "%";
    ember.style.top = Math.random() * 100 + "%";
    heart.appendChild(ember);

    setTimeout(() => ember.remove(), 1200);
  }

  // Redirect after burn finishes
  setTimeout(() => {
    window.location.href = "secret_page.html";
  }, 1800);
}

function goBack() {
  window.history.back();
}

function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth"
  });
}
