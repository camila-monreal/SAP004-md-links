const getCharacters = require('./get-characters.js');
const requestLink = require('./request.js');

function printScreen(path, links) {
    links.forEach(function (link) {
        requestLink(link)
            .then(result => {
                if (path.options.indexOf('--validate') != -1 && path.options.indexOf('--stats') != -1) {

                } else if (path.options.indexOf('--validate') != -1) {
                    console.log(path.path, link, result.response.statusCode, getCharacters(result.body).substr(0 - 50))
                } else if (path.options.indexOf('--stats') != -1) {

                } else {
                    console.log(path.path, link, getCharacters(result.body).substr(0 - 50))

                }
            })
            .catch(error => console.log(path.path, link, "Link not found"));
    });
}
module.exports = printScreen;
