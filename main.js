song="";
leftWristX=""
leftWristY="";
rightWristX="";
rightWristY="";
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 500, 500)
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("left wrist x =" +leftWristX +"left wrist y = " +leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right wrist x =" +rightWristX +"right wrist y = " +rightWristY);

    }
}