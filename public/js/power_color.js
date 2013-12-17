var i = 0;
var colors = ['red', 'green', 'blue', 'black', 'white'];

function setColor() {
    document.body.style.background = colors[i];
    if (++i > colors.length - 1) {
        i = 0;
    }
}

document.body.onload = setColor;
document.body.onclick = setColor;