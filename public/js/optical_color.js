var isFirstColor = true;

function setBackgroundColor() {
    if (isFirstColor) {
        document.body.style.background = 'red';
    } else {
        document.body.style.background = 'gray';
    }
    isFirstColor = !isFirstColor;
}

function switchColor() {
    setInterval(function () {
        setBackgroundColor();
    }, 3000);
}

document.body.onload = switchColor;
// need a clear interval function
// http://www.w3schools.com/jsref/met_win_setinterval.asp