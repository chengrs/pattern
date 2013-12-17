var intv = self.setInterval("setBackgroundColor()", 3000);
var edgeLength = 40;

function setBackgroundColor() {
    var c = document.getElementById("myCanvas");
    if (c && c.getContext) {
        var ctx = c.getContext("2d");
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
    document.body.style.background = 'white';
    window.clearInterval(intv);
}

function drawPattern() {
    var c = document.getElementById("myCanvas");
    document.body.style.background = 'black';

    if (c && c.getContext) {
        var ctx = c.getContext("2d");

        c.width = window.innerWidth;
        c.height = window.innerHeight;

        // alert("height =" + c.height);

        for (var i = 0; i < c.height; i += 2 * edgeLength) {
            for (var j = 0; j < c.width; j += 2 * edgeLength) {
                ctx.fillStyle = 'white';
                ctx.fillRect(j, i, edgeLength, edgeLength);
            }
        }

        for (var i = edgeLength; i < c.height; i += 2 * edgeLength) {
            for (var j = edgeLength; j < c.width; j += 2 * edgeLength) {
                ctx.fillStyle = 'white';
                ctx.fillRect(j, i, edgeLength, edgeLength);
            }
        }
    }
}

document.body.onload = drawPattern;