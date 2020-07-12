function simpleStats(links) {
    const allLinks = links.map((i) => i.href);
    const statsSimpleResult = {
        all: allLinks.length
    };
    return statsSimpleResult;
}

module.exports = simpleStats;
