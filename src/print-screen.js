const getCharacters = require('./get-characters.js');
const requestLink = require('./request.js');
const stats = require('./stats.js');
const simpleStats = require('./stats-simple.js');

function validatedLinkArray(links) {
    const promise = new Promise((resolve, reject) => {
        let promises = []
        links.forEach(link => promises.push(requestLink(link)))
        Promise.all(promises)
            .then(results => {
                resolve(results)
            })
    })
    return promise;
}

function printScreen(input, links, filePath) {
    if (input.options.indexOf('--stats') != -1 && input.options.indexOf('--validate') != -1) {
        validatedLinkArray(links).then(result => console.log(stats(result)))
    } else if (input.options.indexOf('--stats') != -1) {
        console.log(simpleStats(links));
    } else {
        links.forEach(function (link) {
            requestLink(link)
                .then(result => {
                    if (input.options.indexOf('--validate') != -1) {
                        console.log(filePath, link, result.statusCode, getCharacters(result.body).substr(0 - 50))
                    } else {
                        console.log(filePath, link, getCharacters(result.body).substr(0 - 50))
                    }
                })
                .catch(error => console.log(filePath, link, "Link not found"));
        });
    }
}

module.exports = printScreen;
