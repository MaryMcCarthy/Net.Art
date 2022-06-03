
/*
    p5.js MQTT Client example
    This example uses p5.js: https://p5js.org/
    and the Eclipse Paho MQTT client library: https://www.eclipse.org/paho/clients/js/
    to create an MQTT client that sends and receives MQTT messages.
    The client is set up for use on the shiftr.io test MQTT broker (https://shiftr.io/try),
    but has also been tested on https://test.mosquitto.org
    created 12 June 2020
    modified 20 Aug 2020
    by Tom Igoe
    modified 12 Oct 2020 by Róisín Berg
*/

// MQTT client details:
let broker = {
    hostname: 'art-and-tech.cloud.shiftr.io',
    port: 330
};
// MQTT client:
let client;
// client credentials:
let creds = {
    clientID: 'mary',
    userName: 'art-and-tech',
    password: 'wehM7x6JbxcDbyIC'
}
// topic to subscribe to when you connect:
let topic = 'mary/gt/meself';
let datasend = 'mary/gt/meself';


let incomingNumber;
let button;
let button2;
let i;
var fade;
var fadeAmount = 1;
function setup() {
  // put setup code here
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  background(0);
  setMqttStuff();
  //Return Button
  button = createButton("RETURN");
  button.position(850, 500);
  button.mousePressed('mousePressed');


  //Forward Button
  button2 = createButton("FORWARD");
  button2.position(950, 500);
  button2.parent('button2');

}

function draw() {
  // put drawing code here
  let s = 'REVENGE PORN';
  fill(255, 0, 0);
  textSize(75);
  text(s, windowWidth/3, windowHeight/2);


  let f = '1 in 7'

 let i = 0;

  while(i < 100)
  {
    fill(random(255,0,0, fade));
    textSize(random(0, 50));
    text(f, random(windowWidth), random(windowHeight));
    i++;

    if(i==99)
    {

    }
  }

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  fill(random(0, 255));
  textSize(random(10, 100));
  text('Sexual Abuse', random(windowWidth), random(windowHeight));

}

function mousePressed() {
  if (mouseX >= 850 && mouseX <= 920 && mouseY >= 500 && mouseY <= 520 && mouseIsPressed) {
    alert("ERROR! YOU CANNOT GO BACK NOW");


}

}
// called when the client connects
function onConnect() {
    console.log('client is connected');
    client.subscribe(topic);
}

// called when the client loses its connection
function onConnectionLost(response) {
    if (response.errorCode !== 0) {
        console.log('onConnectionLost:' + response.errorMessage);
    }
}

// called when a message arrives
function onMessageArrived(message) {
    console.log('I got a message:' + message.payloadString);
    incomingNumber = parseInt(message.payloadString);

}

// called when you want to send a message:
function sendMqttMessage() {
    // if the client is connected to the MQTT broker:
    if (client.isConnected()) {
        // make a string with a random number form 0 to 15:
        let msg = String(round(random(50)));
        // start an MQTT message:
        message = new Paho.MQTT.Message(msg);
        // choose the destination topic:
        message.destinationName = datasend;
        // send it:
        client.send(message);
        // print what you sent:
        console.log('I sent: ' + message.payloadString);
    }
}

function setMqttStuff()
{
    // Create an MQTT client:
    client = new Paho.MQTT.Client(broker.hostname, Number(broker.port), creds.clientID);
    // set callback handlers for the client:
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    // connect to the MQTT broker:
    client.connect(
        {
            onSuccess: onConnect,       // callback function for when you connect
            userName: creds.userName,   // username
            password: creds.password,   // password
            useSSL: true                // use SSL
        }
    );
  }
