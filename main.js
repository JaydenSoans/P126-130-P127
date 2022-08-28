enemyS = "";
holdS = "";

function preload(){
    enemyS = loadSound("enemy.mp3");
    holdS = loadSound("hold.mp3");
}

function setup(){
    canvas = createCanvas(600,500)
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}