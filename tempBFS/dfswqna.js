const fs = require('fs');
const path = require('path');

function executeJsFile(filepath) {
    // Check for a sibling .qna file
    const qnaPath = path.join(path.dirname(filepath), `${path.basename(filepath, '.js')}.qna`);

    if (fs.existsSync(qnaPath)) {
        try {
            const qnaContent = fs.readFileSync(qnaPath, 'utf-8');
            const qnaJson = JSON.parse(qnaContent);
            console.log(`Content of ${qnaPath}:`, qnaJson);
        } catch (error) {
            console.error(`Error reading or parsing ${qnaPath}:`, error);
        }
    }

    // Execute the JS file
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

const rootDir = '/Users/pronabp/Desktop/KH_Dock/Iamfine/tempBFS/dir1';  // Adjust this path as needed
bfsDirectoryTraversal(rootDir);
