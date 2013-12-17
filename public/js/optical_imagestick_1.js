var intv = self.setInterval("setBackgroundColor()", 3000);

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
    if (c && c.getContext) {
        var ctx = c.getContext("2d");

        c.width = window.innerWidth;
        c.height = window.innerHeight;
        // c.height = document.body.clientHeight;
        // c.width = document.body.clientWidth;
        var recHeight = c.height / 4;
        var recWidth = c.width / 4;

        ctx.fillRect(0, 0, recWidth, recHeight);
        ctx.fillRect(recWidth * 2, 0, recWidth, recHeight);
        ctx.fillRect(recWidth, recHeight, recWidth, recHeight);
        ctx.fillRect(recWidth * 3, recHeight, recWidth, recHeight);

        ctx.fillRect(0, recHeight * 2, recWidth, recHeight);
        ctx.fillRect(recWidth * 2, recHeight * 2, recWidth, recHeight);
        ctx.fillRect(recWidth, recHeight * 3, recWidth, recHeight);
        ctx.fillRect(recWidth * 3, recHeight * 3, recWidth, recHeight);
    }
}

document.body.onload = drawPattern;