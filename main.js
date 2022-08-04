function setup() {
    canvas = createCanvas(480,350);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,135,75,200,200);
    fill("black");
    stroke("aqua");
    circle(50,50,70);
    circle(430,50,70);
    circle(50,300,70);
    circle(430,300,70);
    fill("aqua");
    stroke("black");
    rect(80,35,320,30);
    rect(80,285,320,30);
    rect(35,83,30,185);
    rect(415,83,30,185);
}

function take_snapshot() {
    save('avishikhandelwal.png');
}