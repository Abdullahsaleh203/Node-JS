import  fs from 'fs';
import  path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
fs.readdir(__dirname, (err, files) => { 
    files.forEach(file => { 
        console.log(file); 
    });
});
// const filename = ''
// fs.readFile()
