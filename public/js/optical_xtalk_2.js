function drawPattern() {
    var c = document.getElementById("myCanvas");
    document.body.style.background = '#7f7f7f';

    if (c && c.getContext) {
        var ctx = c.getContext("2d");

        var recWidth = window.innerWidth / 4;
        var recHeight = window.innerHeight / 4;

        ctx.fillStyle = 'white';
        ctx.fillRect(recWidth, recHeight, recWidth * 2, recHeight * 2);
    }
}

document.body.onload = drawPattern;