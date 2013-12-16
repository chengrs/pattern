c = document.getElementById("myCanvas");
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;

ctx = c.getContext("2d");

imageData = ctx.createImageData(c.width, c.height);

for (i = 0; i < c.width * c.height * 4; i += 8) {
    imageData.data[i + 0] = 128;
    imageData.data[i + 1] = 0;
    imageData.data[i + 2] = 128;
    imageData.data[i + 3] = 255;
    imageData.data[i + 4] = 0;
    imageData.data[i + 5] = 128;
    imageData.data[i + 6] = 0;
    imageData.data[i + 7] = 255;
}

// copy the image data back onto the canvas
ctx.putImageData(imageData, 0, 0);