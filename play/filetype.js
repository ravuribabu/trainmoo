var readChunk = require('read-chunk'); // npm install read-chunk
var fileType = require('file-type');
var buffer = readChunk.sync('../88741-babe.jpeg', 0, 262);
var jimp = require('jimp')
var f = fileType(buffer);

console.log(f);

jimp.read('../88741-babe.jpeg', function(err, pic) {
    console.log('INSIDE JIMP READ');
    if (err) {
        console.log(err);
    }
    if (!err) {
        pic.resize(256, 256).quality(60).greyscale().write('88741-babe_thumb.jpeg');
    }
});
