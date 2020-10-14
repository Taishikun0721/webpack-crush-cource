const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

console.log(outputPath)

module.export = {
    mode: 'development',
    entry: './src/index.js',
        file_name: './src/main.js',
        path: outputPath
    }
}