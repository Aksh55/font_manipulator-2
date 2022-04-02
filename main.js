function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 100);

    canvas = createCanvas(490, 490);
    canvas.position(780, 100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{ 
    background('cornsilk')
}