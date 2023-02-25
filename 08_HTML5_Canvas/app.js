const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//ctx.strokeStyle = '#BADA55';
ctx.strokeStyle = '#BA51C0';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
ctx.globalCompositeOperation = 'multiply';
let isDrawing = false;
let lastX = 0;  
let lastY = 0;
let hue = 0;

function draw(e) {
  if (!isDrawing) return;  // do nothing if mouse is up
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];  //destructuring an array
  hue++;
  if (hue > 360) hue = 0;
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
