`use strict`;

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting() {
  painting = true;
  ctx.beginPath();
}

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  //console.log(`x: ${x}, y: ${y}`);
  if (painting) {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseEnter(event) {
  x = event.offsetX;
  y = event.offsetY;

  ctx.moveTo(x, y);
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseenter", onMouseEnter);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
