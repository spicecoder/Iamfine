const fs = require('fs');
const vm = require('vm');
const file1 = fs.readFileSync('./file1.js', 'utf8');
const file2 = fs.readFileSync('./file2.js', 'utf8');
const mergedContent = file1 + '\n' + file2;
vm.runInThisContext(mergedContent);