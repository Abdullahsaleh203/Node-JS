import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

// read directory
fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});
// read file
fs.readFile(__dirname + '/server.js', 'utf8', (err, data) => {
    console.log(data);
});
// const filename = ''
// fs.readFile()
