const fs = require('fs');
const zlib = require('zlib');

const textFile = './storage/big_file.txt';
const zipFile = './storage/compressed_big_file.zip';

const readStream = fs.createReadStream(textFile);
const writeStream = fs.createWriteStream(zipFile);
const zipStream = zlib.createGzip();

const errorHandler = (message) => {
    console.log('Error: ', message);
    readStream.destroy();
    writeStream.end();
    zipStream.destroy();
};

readStream
    .on('error', errorHandler)
    .pipe(zipStream)
    .pipe(writeStream)
    .on('error', errorHandler);
