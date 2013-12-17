function drawPattern() {
    var c = document.getElementById("myCanvas");
    document.body.style.background = '#7f7f7f';

    if (c && c.getContext) {
        var ctx = c.getContext("2d");

        var recWidth = window.innerWidth / 3;
        var recHeight = window.innerHeight / 3;

        ctx.fillStyle = 'white';
        ctx.fillRect(recWidth, recHeight, recWidth, recHeight);
    }
}

document.body.onload = drawPattern;