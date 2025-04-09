const fs = require('src/Fs/fs');

fs.readFile('./storage/text_file.txt', (error, data) => {
    console.log(data.toString());
});
fs.readFile('./storage/text_file.txt', 'utf8', (error, data) => {
    console.log(data);
});

fs.writeFile('./storage/other_text_file.txt', 'Line to add', () => {});

fs.mkdir('./storage/test')
    .then(() => {
        fs.writeFIle('./storage/test/test.txt', 'Write line')
            .then(() => {
                fs.readFile('./storage/test/test.txt', 'utf', (error, data) => {
                    if (data != 'Write line') {
                        console.log('Data is invalid: ', data);
                    }
                })
                    .then(() => {
                        fs.unlink('./storage/test/test.txt')
                            .then(() => {
                                fs.removeDir('./storage/test');
                            });
                    })
            })
        });

const path = './storage/test';
const filePath = `${path}/test.txt`;

fs.mkdir(path, { recursive: true })
    .then(() => fs.writeFile(filePath, 'Write line'))
    .then(() => fs.readFile(filePath, 'utf8'))
    .then((data) => {
        if (data !== 'Write line') {
            console.log('Data is invalid:', data);
        }
    })
    .then(() => fs.unlink(filePath))
    .then(() => fs.rmdir(path))
    .catch((error) => console.error('Error:', error));



const fs2 = require('src/Fs/fs').promises;
async function manageFile() {
    try {
        await fs2.mkdir(path, { recursive: true });
        await fs2.writeFile(filePath, 'Write line');

        const data = await fs2.readFile(filePath, 'utf8');
        if (data !== 'Write line') {
            console.log('Data is invalid:', data);
        }

        await fs2.unlink(filePath);
        await fs2.rmdir(path);
    } catch (error) {
        console.error('Error:', error);
    }
}

manageFile();
