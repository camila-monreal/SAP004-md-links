const read = require('../read-file.js');
const selectLinks = require('../select-links.js');
const requestLink = require('../request.js');
const getCharacters = require('../get-characters.js');

function mdLinks(path, options) {
    let promises = []
    read(path).forEach(mdFile => {
        const links = selectLinks(mdFile.text);
        links.forEach(link => promises.push(requestLink(link, mdFile.path)))
    })
    const promise = new Promise((resolve, reject) => {
        let print = []
        Promise.all(promises)
            .then(results => {
                results.forEach(result => {
                    if (typeof (options) == 'object' && options.validate) {
                        print.push({ href: result.link, text: getCharacters(result.body).substr(0 - 50), file: result.path, status: result.statusCode })
                    } else {
                        print.push({ href: result.link, text: getCharacters(result.body).substr(0 - 50), file: result.path })
                    }
                })
                resolve(print);
            })
    })
    return promise;
}
module.exports = mdLinks;