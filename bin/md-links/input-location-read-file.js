function read(path) {
    let fs = require('fs');        

    const data = fs.readFileSync(path, 'utf8');
    return data;
}

module.exports = read;