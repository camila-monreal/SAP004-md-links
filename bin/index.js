function locationFile() {
    const arguments = process.argv;
    const path = arguments.splice(2, process.argv.length - 1).join(' ');
    return path;
}

function readFile() {
    let fs = require('fs');
    const path = locationFile();
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) throw err;
        const links = selectLinks(data);
        console.log(links);
        validateLinks(links);
    });
}
readFile();

function selectLinks(mdFile) {
    const lines = mdFile.split(/\r?\n/);
    let links = [];
    lines.forEach(function (line) {
        link = getLinkRegex(line);
        if (link) {
            links.push(link);
        }
    })
    return links;
}

function getLinkRegex(line) {
    const regexStructure = /(https?):\/\/[a-zA-Z/+-.:!0-9%?@&_#=~]+[A-Za-z/+-.:!0-9%?@&_#=~]?/g
    const result = regexStructure.exec(line);
    if (result != null) {
        return result[0];
    }
    return false;
}

function validate(link) {
    const request = require('request');
    request(link, function (error, response, body) {
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
       //console.log('body:', body); 
    });
}

function validateLinks(links) {
    links.forEach(function (link) {
        validate(link);
    });
}
