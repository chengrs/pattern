c = document.getElementById("myCanvas");
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;

ctx = c.getContext("2d");

imageData = ctx.createImageData(c.width, c.height);

function drawHorizontalLines() {
    var i = 0;
    var j = 0;
    for (i = 0; i < c.height; i++) {
        var start = i * c.width * 4;
        if (i % 2 == 0) {
            for (j = start; j < start + (c.width * 4); j += 4) {
                imageData.data[j] = 255;
                imageData.data[j + 1] = 255;
                imageData.data[j + 2] = 255;
                imageData.data[j + 3] = 255;
            }
        } else {
            for (j = start; j < start + (c.width * 4); j += 4) {
                imageData.data[j] = 0;
                imageData.data[j + 1] = 0;
                imageData.data[j + 2] = 0;
                imageData.data[j + 3] = 255;
            }
        }
    }
}

function drawVerticalLines() {
    var i = 0;
    for (i = 0; i < c.width * c.height * 4; i += 8) {
        imageData.data[i + 0] = 0;
        imageData.data[i + 1] = 0;
        imageData.data[i + 2] = 0;
        imageData.data[i + 3] = 255;
        imageData.data[i + 4] = 255;
        imageData.data[i + 5] = 255;
        imageData.data[i + 6] = 255;
        imageData.data[i + 7] = 255;
    }
}

function drawInterleavedPixels() {
    var i = 0;
    var j = 0;
    for (i = 0; i < c.height; i++) {
        var start = i * c.width * 4;
        if (i % 2 == 0) {
            for (j = start; j < start + (c.width * 4); j += 8) {
                imageData.data[j] = 0;
                imageData.data[j + 1] = 0;
                imageData.data[j + 2] = 0;
                imageData.data[j + 3] = 255;
                imageData.data[j + 4] = 255;
                imageData.data[j + 5] = 255;
                imageData.data[j + 6] = 255;
                imageData.data[j + 7] = 255;
            }
        } else {
            for (j = start; j < start + (c.width * 4); j += 8) {
                imageData.data[j] = 255;
                imageData.data[j + 1] = 255;
                imageData.data[j + 2] = 255;
                imageData.data[j + 3] = 255;
                imageData.data[j + 4] = 0;
                imageData.data[j + 5] = 0;
                imageData.data[j + 6] = 0;
                imageData.data[j + 7] = 255;
            }
        }
    }
}

var patterns = ['red', 'green', 'blue', 'black', 'white', drawHorizontalLines, drawVerticalLines, drawInterleavedPixels];

var idx = 0;

function setPattern() {
    if (typeof (patterns[idx]) == "string") {
        ctx.beginPath();
        ctx.rect(0, 0, c.width, c.height);
        ctx.fillStyle = patterns[idx];
        ctx.fill();
    } else if (typeof (patterns[idx]) == "function") {
        patterns[idx]();
        ctx.putImageData(imageData, 0, 0);
    }

    if (++idx > patterns.length - 1) {
        idx = 0;
    }
}

document.body.onload = setPattern;
document.body.onclick = setPattern;