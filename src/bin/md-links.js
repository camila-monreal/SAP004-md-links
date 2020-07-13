#!/usr/bin/env node
const userInput = require('../path.js');
const read = require('../read-file.js');
const selectLinks = require('../select-links.js');
const printScreen = require('../print-screen.js');

function mdLinks() {
    const input = userInput();
    read(input.path).forEach(mdFile => {
        const links = selectLinks(mdFile.text);
        printScreen(input, links, mdFile.path);
    })
}

mdLinks();
