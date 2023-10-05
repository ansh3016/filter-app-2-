function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotResult);
}

function modelLoaded(){
console.log("poseNet is initialized");
}

function gotResult(results){
if(results.length>0){
console.log(results);
console.log("nose x="+results[0].pose.nose.x);
console.log("nose y="+results[0].pose.nose.y);
}
}

function draw(){
image(video, 0,0,300,300);
}

function take_snapshot(){
    save("my_picture.png");
}

