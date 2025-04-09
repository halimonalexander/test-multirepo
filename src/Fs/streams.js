const fs = require('fs');
const stream = require("node:stream");

const filePath = './storage/big_file.txt';
const filePath2 = './storage/big_file_copy.txt';

// const readStream = fs.createReadStream(filePath);
const chunkSizeKBytes = 4;
const readStream = fs.createReadStream(filePath, { highWaterMark: chunkSizeKBytes * 1024 });
const writeStream = fs.createWriteStream(filePath2);

const handleError = (error) => {
    console.log('Error', error);
    readStream.destroy();
    writeStream.destroy();
};

let counter = 0;

readStream
    .on('data', (chunk) => {
        if (++counter <= 2) {
            console.log('----------------------')
            console.log(`Chunk size: ${chunk.length} bytes`);
            console.log(chunk.toString());
        }
        writeStream.write(chunk);
    })
    .on('end', () => {
        console.log('✅ Чтение завершено');

        fs.createReadStream(filePath).pipe(writeStream);
    })
    .on('error', handleError);
