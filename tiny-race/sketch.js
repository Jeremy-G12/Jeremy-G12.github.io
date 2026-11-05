let racerXs = [30, 30, 30, 30];
let startY = 90;
let yStep = 60;
let finishX = 560;
let speed = 50;

function setup() {
    createCanvas(600, startY + yStep * racerXs.length + 8000);
}
function draw() {
  background(240);
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(-3, speed);
    }
    if (racerXs[i] >= finishX) {
      racerXs[i] += random(-500, -405);
    }
    circle(racerXs[i], y, 24);
  }
   if (keyIsDown("r")) {
      for (let i = 0; i < racerXs.length; i++) {
        racerXs[i] = 30;
      }
    }
      if (key == 's') {
        racerXs.push("30, 30, 30, 30")
    }
  }

