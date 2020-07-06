function locationFile() {
    const arguments = process.argv;
    console.log(arguments);
    const path = arguments.splice(2, process.argv.length - 1).join(' ');
    return path;
}

function readFile() {
    let fs = require('fs');
    const path = locationFile();
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
    });
}

console.log(readFile());

function selectLinks () {

}