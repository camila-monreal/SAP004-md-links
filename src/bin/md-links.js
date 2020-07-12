#!/usr/bin/env node
const userInput = require('../path.js');
const read = require('../read-file.js');
const selectLinks = require('../select-links.js');
const printScreen = require('../print-screen.js');

function mdLinks() {
    const input = userInput();
    const mdFile = read(input.path);
    const links = selectLinks(mdFile);
    printScreen(input, links);
}

mdLinks();
