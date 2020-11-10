var prevTime = new Date().getTime();
function loop(time) {
    requestAnimationFrame(loop);

    var curTime = new Date().getTime();
    var dt = (curTime - prevTime) / 1000;
    prevTime = curTime;


    var speed = 6;
    if(keys.up) camera.y -= speed * dt;
    if(keys.down) camera.y += speed * dt;
    if(keys.left) camera.x -= speed * dt;
    if(keys.right) camera.x += speed * dt;

    var leftMost = (camera.x - scn.width / 2);
    var topMost = (camera.y - scn.height / 2);
    var screenCoordinates = {
        x: (300 - leftMost) * 16,
        y: (250 - topMost) * 16
    };

    rsc.ctx.clearRect(0, 0, scn.width * 16, scn.height * 16);

    rsc.ctx.fillStyle = "black";
    rsc.ctx.beginPath();

    rsc.ctx.rect(Math.round(screenCoordinates.x), Math.round(screenCoordinates.y), 16, 16);

    rsc.ctx.fill();
    rsc.ctx.closePath();
}

var camera = {x: 300, y: 250}
var rsc = {};
var scn = {
    width: 50,
    height: 37.5
};
var keys = {
    up: false,
    down: false,
    right: false,
    left: false
};

rsc.canvas = document.getElementById("canvas");
rsc.canvas.width = 16 * scn.width;
rsc.canvas.height = 16 * scn.height;
rsc.ctx = rsc.canvas.getContext("2d");

window.onkeydown = function(e) {
    switch(e.keyCode) {
        case 40:
            keys.down = true;
            return false;
        case 38:
            keys.up = true;
            return false;
        case 37:
            keys.left = true;
            return false;
        case 39:
            keys.right = true;
            return false;
    }
};

window.onkeyup = function(e) {
    switch(e.keyCode) {
        case 40:
            keys.down = false;
            return false;
        case 38:
            keys.up = false;
            return false;
        case 37:
            keys.left = false;
            return false;
        case 39:
            keys.right = false;
            return false;
    }
};

requestAnimationFrame(loop);
