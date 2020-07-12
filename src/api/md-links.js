const read = require('../read-file.js');
const selectLinks = require('../select-links.js');
const requestLink = require('../request.js');
const getCharacters = require('../get-characters.js');

function mdLinks(path, options) {
    const mdFile = read(path);
    const links = selectLinks(mdFile);
    const promise = new Promise((resolve, reject) => {
        let promises = []
        links.forEach(link => promises.push(requestLink(link)))
        Promise.all(promises)
            .then(results => {
                let print = []
                results.forEach(result => {
                    if (typeof (options) == 'object' && options.validate) {
                        print.push({ href: result.link, text: getCharacters(result.body).substr(0 - 50), file: path, status: result.statusCode })
                    } else {
                        print.push({ href: result.link, text: getCharacters(result.body).substr(0 - 50), file: path })
                    }
                })
                resolve(print);
            })
    })
    return promise;
}
module.exports = mdLinks;