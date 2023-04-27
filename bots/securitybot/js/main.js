/* SPECIAL THANKS *for their hard works*
https://www.fontspace.com/glitch-goblin-font-f94950
https://codepen.io/Saramazal/pen/RwZOxNp
https://codepen.io/Saramazal/pen/LYyywNb */

// List of characters to use for the digital rain
const chars = "פסחכשרושמח♡▪︎•~✶{";
//✶
// Set up the canvas
const canvas = document.createElement("canvas");
canvas.style.width = "100%";
canvas.style.height = "100%";

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Set up the characters
const charSize = 20;
var columns = canvas.width / charSize;
const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

// Render the characters
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffff";
  ctx.font = charSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * charSize, drops[i] * charSize);
    drops[i]++;
    if (drops[i] * charSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
}

// Animate the characters
setInterval(draw, 34);

$(window).on('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = canvas.width / charSize;
  for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}
})