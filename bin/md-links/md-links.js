const userInput = require('./path.js');
const read = require('./input-location-read-file.js');
const selectLinks = require('./select-links.js');
const printScreen = require('./print-screen.js');

function mdLinks() {
    const path = userInput();
    const mdFile = read(path);
    const links = selectLinks(mdFile);
    printScreen(path, links);
}

mdLinks();
