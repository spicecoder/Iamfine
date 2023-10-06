const fs = require('fs');
const path = require('path');

function executeJsFile(filepath) {
    // Simply require the JS file to execute it
    // This assumes that the JS file exports a function that you want to call
    try {
        const componentFunction = require(filepath);
        if (typeof componentFunction === 'function') {
            componentFunction();
        }
    } catch (error) {
        console.error(`Error executing ${filepath}:`, error);
    }
}

function bfsDirectoryTraversal(rootDirectory) {
    // Using an array as a queue to perform BFS
    const queue = [rootDirectory];

    while (queue.length) {
        const currentDirectory = queue.shift();
        const entries = fs.readdirSync(currentDirectory, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(currentDirectory, entry.name);
            if (entry.isDirectory()) {
                queue.push(fullPath);
            } else if (entry.isFile() && path.extname(entry.name) === '.js') {
                executeJsFile(fullPath);
            }
        }
    }
}

// Example usage
const rootDir = '/Users/pronabp/Desktop/KH_Dock/Iamfine/tempBFS/dir1';  // Adjust this path as needed
bfsDirectoryTraversal(rootDir);
