
var i = 0;
var gd = ['wv', 'wh', 'rv', 'rh', 'gv', 'gh', 'bv', 'bh'];

function draw() {
    var c = document.getElementById('myCanvas');
    c.width = document.body.clientWidth; //document.width is obsolete
    c.height = document.body.clientHeight; //document.height is obsolete
    var ctx = c.getContext('2d');
    ctx.fillStyle = '#FFFFFF';

    // create gradient
    switch (gd[i][1]) {
    case 'h':
        var grd = ctx.createLinearGradient(0, 0, c.width, 0);
        break;
    case 'v':
    default:
        var grd = ctx.createLinearGradient(0, 0, 0, c.height);
        break;
    }

    switch (gd[i][0]) {
    case 'r':
        grd.addColorStop(0, 'red');
        break;
    case 'g':
        grd.addColorStop(0, 'green');
        break;
    case 'b':
        grd.addColorStop(0, 'blue');
        break;
    case 'w':
    default:
        grd.addColorStop(0, 'white');
        break;
    }

    grd.addColorStop(1, 'black');

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, c.width, c.height);

    if (++i > gd.length - 1) {
        i = 0;
    }
}

document.body.onload = draw;
document.body.onclick = draw;