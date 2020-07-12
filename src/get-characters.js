function getCharacters(body) {
    if (body == '') {
        return '';
    }
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(body);
    const content = dom.window.document
    const characters = 'Title: ' + content.querySelector('title').textContent;
    return characters;
}

module.exports = getCharacters;
