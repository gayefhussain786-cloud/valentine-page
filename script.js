const sadGifs = [
  // 1 — Normal / hopeful
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTViZDRveXJlNjF5Y3B6eWlxa3IwajZtNTZ1aWx1NzVlOGYzcHkxdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mi4ec226vjAkehSLk0/giphy.gif",

  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aTVxeGEyYmI3OWN6eDZoMnB4NGQ3cXAxdTlzbW83cG90ZDBqejdqdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MFIsOqzodLr7ewnkUb/giphy.gif",
  // 2 — Slightly unsure
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dmtiMnAzdWsyMWp3b2M0a3NhbTRkeWxsM2t5ejIxcXV3Zm8yYmRvZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ISOckXUybVfQ4/giphy.gif",

  // 3 — Worried
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b29wYjc0a3NsZndqdDR1bWE3NjRhbncxY2c0aTRpemlxZGhlZnNveCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7SF5scGB2AFrgsXP63/giphy.gif",

  // 4 — Sad
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dmtiMnAzdWsyMWp3b2M0a3NhbTRkeWxsM2t5ejIxcXV3Zm8yYmRvZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7AzEXdIb1wyCTWJntb/giphy.gif",

  // 5 — Very sad
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTViZDRveXJlNjF5Y3B6eWlxa3IwajZtNTZ1aWx1NzVlOGYzcHkxdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dJYoOVAWf2QkU/giphy.gif",

  // 6 — Crying
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWtzYmJiamRid2g5cGhncGY4OGtybWR4NWVuNnN3MmR1ZnduMGY2bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/aWMJvA76tNnBR9gkpT/giphy.gif",

  // 7 — Heartbroken
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b29wYjc0a3NsZndqdDR1bWE3NjRhbncxY2c0aTRpemlxZGhlZnNveCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iJJ6E58EttmFqgLo96/giphy.gif",

  // 8 — Devastated
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dmtiMnAzdWsyMWp3b2M0a3NhbTRkeWxsM2t5ejIxcXV3Zm8yYmRvZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fOQs20FLdvINW/giphy.gif",

  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWtzYmJiamRid2g5cGhncGY4OGtybWR4NWVuNnN3MmR1ZnduMGY2bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sLkIthus9lEwoe7PRx/giphy.gif"

];


(async function checkForUpdates() {
    const currentVersion = "1.0";
    
    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure?",
    "Really sure??",
    "Really Really sure???",
    "Baby please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  const gif = document.getElementById('moodGif');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;

  const sadLevel = Math.min(messageIndex, sadGifs.length - 1);
  gif.src = sadGifs[sadLevel];
}


function handleYesClick() {
    // 1. Instant Firecracker Burst
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ffd700', '#ff69b4'] // Red, Gold, Pink
    });

    // 2. Side "Firecracker" Cannons
    const duration = 1.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ffb6c1', '#ff1493']
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ffb6c1', '#ff1493']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    // 3. Brief delay to see the celebration, then go to the Yes page
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 1200);
}