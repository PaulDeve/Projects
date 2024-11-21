// Configuración del canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

// Dibujando un círculo
ctx.beginPath();
ctx.arc(250, 250, 50, 0, 2 * Math.PI);
ctx.fillStyle = '#FF5722';
ctx.fill();

// Animando el círculo
var x = 290;
var y = 250;
var dx = 2;
var dy = -2;
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.fillStyle = '#FF5722';
  ctx.fill();
  if (x + dx > canvas.width - 50 || x + dx < 50) {
    dx = -dx;
  }
  if (y + dy > canvas.height - 50 || y + dy < 50) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
animate();
