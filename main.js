video="";

function preload() {
    video = createVideo('video.mp4');
    video.hide();
 }



function setup(){
     canvas= createCanvas(380,380);
     canvas.position(450,250);
     
}

function draw() {
    image(video,0,0,380,380);
}

function start(){
    video.play();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    objectDetector.detect(video,gotResults);    
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function gotResults(error,results){
if (error) {
    console.log(error);
} else {
    console.log(results);
}
}

function modelLoaded(){
    console.log("model is loaded");
    video.loop();
    video.speed(1.5);
    video.volume(0);
    Status = true;
}

