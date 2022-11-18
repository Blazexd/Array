let spotSize = [100, 300, 600, 450]; // an array
let spotIndex = 0; // a wariable


function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);
    ellipse(400, 400, spotSize[spotIndex], spotSize[spotIndex]); //spotSize detemines
    console.log(spotIndex);
}

function mousePressed(){
    if (spotIndex == spotSize.length - 1) {
    spotIndex = 0;
} else {

    spotIndex = spotIndex + 1;
}
console.log(spotSize.length);
}
