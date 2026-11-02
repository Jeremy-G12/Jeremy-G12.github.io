let ballSize = 30;
let defaultColor = 10;
let brush = 50;
let amount = 3000;
class Circle {
  constructor() {
    this.x = random() * 800 + 50;
    this.y = random() * 600 + 50;
    this.diameter = ballSize;
    this.randomizeColor();
  }

  randomizeColor() {
    this.hue = Math.floor(random() * 360);
  }

  update() {
    let d = dist(this.x, this.y, mouseX, mouseY);

    if (d < brush) {
      if (mouseButton.left) {
        this.x += random() * 40 - 10;
        this.y += random() * 40 - 10;

        if (this.x > 850) {
          this.x = 850;
        }
        if (this.y > 650){
          this.y = 650;
        }
      }
    }
  }

  draw() {
    fill(this.hue, 100, 50);
    circle(this.x, this.y, this.diameter);
  }
}

let circles = [];

function setup() {
  createCanvas(900, 700);
  colorMode(HSL);
  for (let i = 0; i < amount; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(220);
  for (let c of circles) {
    c.update();
    c.draw();
  }
  noFill();
  stroke("black");
  circle(mouseX, mouseY, brush * 2);
}
function keyPressed() {
  if (key === "l") {
    brush = 100;
  }
  if (key === "s") {
    brush = 30;
  }
  if (key === "m") {
    brush = 50;
  }
  if (key === "h") {
    brush = 250;
  }
  if (key === "o") {
    for (let c of circles) {
      c.hue = 40;
    }
  }
  if (key === "y") {
    for (let c of circles) {
      c.hue = 60;
    }
  }
  if (key === "g") {
    for (let c of circles) {
      c.hue = 100;
    }
  }
  if (key === "b") {
    for (let c of circles) {
      c.hue = 200;
    }
  }
  if (key === "p") {
    for (let c of circles) {
      c.hue = 280;
    }
  }
  if (key === "r") {
    for (let c of circles) {
      c.hue = 10;
    }
  }
  if (key === "Enter") {
    for (let c of circles) {
      c.randomizeColor();
    }
  }
}
