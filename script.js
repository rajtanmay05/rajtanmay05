const cake = document.getElementById("cake");
const balloonsContainer = document.getElementById("balloons");
const heartsContainer = document.getElementById("hearts");
const sparklesContainer = document.getElementById("sparkles");

// 🎂 Create stacked cake slices
for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    const slice = document.createElement("div");
    slice.className = "slice";
    cake.appendChild(slice);
    setTimeout(() => {
      slice.style.opacity = 1;
      slice.style.transform = "translateY(0)";
    }, 100);
  }, i * 700);
}

// 🕯 Candle with flame
setTimeout(() => {
  const candle = document.createElement("div");
  candle.className = "candle";
  const flame = document.createElement("div");
  flame.className = "flame";
  candle.appendChild(flame);
  cake.insertBefore(candle, cake.firstChild);
}, 4 * 700 + 500);

// 🎈 Balloons
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.style.width = "40px";
  balloon.style.height = "50px";
  balloon.style.position = "absolute";
  balloon.style.bottom = "0";
  balloon.style.left = `${Math.random() * 90}%`;
  balloon.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
  balloon.style.borderRadius = "50%";
  balloon.style.animation = "floatUp 8s linear forwards";
  balloonsContainer.appendChild(balloon);
  setTimeout(() => balloon.remove(), 8000);
}
setInterval(createBalloon, 500);

// ❤️ Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "❤️";
  heart.style.position = "absolute";
  heart.style.bottom = "20px";
  heart.style.left = `${Math.random() * 90}%`;
  heart.style.fontSize = "24px";
  heart.style.animation = "floatHeart 5s ease-in forwards";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 700);

// ✨ Sparkles
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.style.width = "10px";
  sparkle.style.height = "10px";
  sparkle.style.borderRadius = "50%";
  sparkle.style.background = "#fff";
  sparkle.style.position = "absolute";
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.animation = "sparkle 1s ease-out";
  sparklesContainer.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
}
setInterval(createSparkle, 300);

// 🔊 Music Button
document.getElementById("playBtn").addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.play()
    .then(() => {
      document.getElementById("playBtn").style.display = "none";
    })
    .catch(err => {
      alert("Music couldn't be played. Try clicking again.");
      console.error("Music play error:", err);
    });
});
