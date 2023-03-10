function preload()
{

}

function setup()
{
    console.log("creating canvas");
    canvas = createCanvas(300,300);
    canvas.center();
    console.log("created canvas");
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}
function modelLoaded()
{
    console.log("PoseNet is initiallised");
}
function draw()
{
    image(video, 0,0,300,300);
}

function take_snapshot()
{
    save("myFilter.png");
}