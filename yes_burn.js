(function () {
  let gateReady = false;
  let gateOpen = false;

  function setupGate() {
    if (gateReady) return;
    gateReady = true;

    const container = document.querySelector(".burn-container");
    const img = document.querySelector(".burn-paper");
    if (!container || !img) return;

    const src = img.src;
    img.style.display = "none";

    // Create the two door halves
    const left = document.createElement("div");
    left.className = "gate-left";
    const imgL = document.createElement("img");
    imgL.src = src;
    left.appendChild(imgL);

    const right = document.createElement("div");
    right.className = "gate-right";
    const imgR = document.createElement("img");
    imgR.src = src;
    right.appendChild(imgR);

    container.appendChild(left);
    container.appendChild(right);

    function size() {
      const h = container.offsetHeight;
      [imgL, imgR].forEach(i => { 
        i.style.height = h + "px"; 
        i.style.width = "auto"; 
      });
    }

    window.addEventListener("resize", size);
    imgL.onload = size;
    size();
  }

  window.burnPaper = function () {
    if (gateOpen) return;
    gateOpen = true;

    const container = document.querySelector(".burn-container");
    const left = document.querySelector(".gate-left");
    const right = document.querySelector(".gate-right");
    const light = document.querySelector(".light-engulf");
    const text = document.querySelector(".burn-text");

    // 1. Stop floating and hide text
    container.classList.add("splitting");
    if (text) text.classList.add("hidden");

    // 2. Swing doors open like a gate
    left.style.transform = "rotateY(115deg)";
    right.style.transform = "rotateY(-115deg)";

    // 3. Light fills the world and camera drifts in
    setTimeout(() => {
      light.classList.add("active");
      document.body.classList.add("drifting");
    }, 300);

    // 4. Navigate to the secret page once the screen is white
    setTimeout(() => {
      window.location.href = "secret_page.html";
    }, 2500);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupGate);
  } else {
    setupGate();
  }
})();