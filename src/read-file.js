function read(path) {
    let fs = require('fs');
    let data = [];
    if (path.includes(".md")) {
        data.push({ path: path, text: fs.readFileSync(path, 'utf8') });
    } else {
        
        fs.readdirSync(path).forEach(function (file) {
            if (file.includes(".md")) {
                data.push({ path: path + '/' + file, text: fs.readFileSync(path + '/' + file, 'utf8') })
            }
        });
    }

    return data;
}

module.exports = read;