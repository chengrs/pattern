var i = 0;
var colors = ['#1f1f1f', '#3f3f3f', '#5f5f5f', '#7f7f7f', '#9f9f9f', '#bfbfbf', '#dfdfdf'];

function setColor() {
    document.body.style.background = colors[i];
    if (++i > colors.length - 1) {
        i = 0;
    }
}

document.body.onload = setColor;
document.body.onclick = setColor;