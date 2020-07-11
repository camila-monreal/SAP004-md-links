const getCharacters = require('./get-characters.js');
const requestLink = require('./request.js');

function printScreen(path, links) {
    links.forEach(function (link) {
        requestLink(link)
            .then(result => console.log(path, link, getCharacters(result.body).substr(0 - 50)))
            .catch(error => console.log(path, link, "Link not found"));
    });
}
module.exports = printScreen;
