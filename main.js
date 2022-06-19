function preload()
{}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Intialized");
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        console.log("mustache x" + results.pose.mustache.x);
        console.log("mustache y" + results.pose.mustache.y);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300); 
}

function take_snapshot()
{
    save('myFilterImage.png');
}
