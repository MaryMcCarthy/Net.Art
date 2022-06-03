
let capture;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-holder2');
    background(0);
    //Accessing Camera on device
    capture = createCapture(VIDEO);
    capture.size(400, 400);

    //return button
    let button3 = createButton('Try Again');
    button3.position(windowWidth/2, windowHeight/1.8);
    button3.parent('button3');
}

function draw() {
  let p = createButton('Pornhub');
  let c = color(230, 188, 44);
  p.position(600, 90);
  p.style('background-color', c);
  p.style('font-size', '50px');
  p.size(400, 100);
}

function mousePressed() {
  //Setting up a box to contain text that only shows once you click on the logo
  if(mouseX <= 1000 && mouseX >= 600 && mouseY <= 190 && mouseY >= 40 ){
    let c = 'You are going to consent to this because you wont actually want to read my terms. What you do not know, however, is that you have just consented to me accessing your camera, your data and everything else.';
    textSize(20);
    fill(255);
    text(c, 485, 220, 600, 400);

    //Accept button
    let col = color(0, 120, 72);
    let button = createButton('ACCEPT');
    button.position(windowWidth/1.7, 400);
    button.style('background-color', col);
    button.mousePressed('mouseClicked');

    //Reject Button
    let lor = color(255, 0, 0);
    let button2 = createButton('REJECT');
    button2.position(windowWidth/1.5, 400);
    button2.style('background-color', lor);
    button2.mousePressed('mouseClicked');

}
}

function mouseClicked(){
  if(mouseX >= 1280 && mouseX <= 1350 && mouseY >= 390 && mouseY <= 410){
    image(capture, 0 , 0, 320, 240);
    filter(INVERT);
  } else if(mouseX >= 1130 && mouseX <= 1200 && mouseY >= 390 && mouseY <= 410){
    image(capture, 0 , 0, 320, 240);
    filter(INVERT);
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
