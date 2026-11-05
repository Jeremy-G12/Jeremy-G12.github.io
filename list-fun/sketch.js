let dotXs = [10,20,30,40,50,];
let startY = 90;
let yStep = 60;
let speed = 5;

function setup(){
    createCanvas(600, startY + yStep * dotXs.length);
}

function draw(){
    background(240);
     for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
     }
    circle(dotXs[1], y, 24);
}



