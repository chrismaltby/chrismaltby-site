var track = SC.Widget('track');
var instructions = document.getElementById('instructions');
var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
var brush = new Image;
brush.crossOrigin = 'Anonymous';
brush.src = 'img/brush5.png';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var paint = false;

var oldMouse = [];
var angleRadians = null;
var paintOpacity = 1;
var percentFilled = 0;
var started = false;
var mute = false;

brush.onload = function() {

    document.body.className = 'loaded';

    setInterval(function(){
        paintOpacity *= 0.9;

        // Volume
        if(mute) {
            track.setVolume(0);
        } else {
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var data = imageData.data;
            var count = 0;
            for(var i = 0; i < data.length; i += 4) {
                if(data[i + 3] > 0) {
                    count+=data[i];
                }
            }
            percentFilled = count / (255 * canvas.width * canvas.height);
            track.setVolume(-Math.log(1-percentFilled));
        }
    }, 30);

    function start() {
        paint = true;
        oldMouse = [];
        angleRadians = null;
        paintOpacity = 1;
        instructions.style.display = 'none';  

        if(!started) {
            track.play();
            started = true;
        }
    }

    function stop() {
        paint = false;
        oldMouse = [];    
    }

    function move(x,y) {
        if(paint && oldMouse.length > 0) {
            var dist = distance(oldMouse[0].x, oldMouse[0].y, x, y);
            if(dist > 3) {
                if(angleRadians === null) {
                    angleRadians = Math.atan2(y - oldMouse[0].y, x - oldMouse[0].x);
                }
                brushFromTo(oldMouse[0].x, oldMouse[0].y, x, y, angleRadians, dist);
            }
        }

        oldMouse.push({
            x: x,
            y: y
        });
        oldMouse = oldMouse.slice(-3);    
    }

    document.onmousemove = function(e) {
        e.preventDefault();
        move(e.pageX, e.pageY);
    };

    document.ontouchmove = function(e) {
        e.preventDefault();
        move(e.pageX, e.pageY);
    }; 

    document.onmousedown = function() {
        start();
    };

    document.onmouseup = function() {
        stop();
    };

    document.ontouchstart = function() {
        start();   
    };

    document.ontouchend = function() {
        stop();
    };

    document.getElementById('togglesound').onclick = function(e) {
        if(mute) {
            track.play();
        } else {
            track.pause();
        }
        mute = !mute;
        e.currentTarget.className = mute ? 'off' : '';
    };
};

window.onresize = function() {
    if(canvas.width < window.innerWidth || canvas.height < window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; 
        instructions.style.display = 'block';    
    }
};

function distance(x1,y1,x2,y2){ 
    if(!x2) x2=0; 
    if(!y2) y2=0;
    return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)); 
}

function brushFromTo(x1,y1,x2,y2,angleRadians,dist) {
    for(var i=0;i<1;i+=1/dist) {
        ctx.save();
        ctx.globalAlpha = paintOpacity;

        ctx.translate(
            x1 + i * (x2-x1),
            y1 + i * (y2-y1)
        );

        var scale = Math.max(0.2,Math.min(1,dist/30));

        ctx.scale(scale, scale);
        ctx.rotate(angleRadians);

        ctx.drawImage(
            brush,
            -brush.width/2,
            -brush.height/2          
        );   

        ctx.restore();
    }
}
