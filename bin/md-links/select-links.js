function getLinkRegex(line) {
    const regexStructure = /(https?):\/\/[a-zA-Z/+-.:!0-9%?@&_#=~]+[A-Za-z/+-.:!0-9%?@&_#=~]?/g
    const result = regexStructure.exec(line);
    if (result != null) {
        return result[0];
    }
    return false;
}

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

module.exports = selectLinks;
