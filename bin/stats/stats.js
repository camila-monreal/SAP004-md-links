function stats(links) {
    const allLinks = links.map((i) => i.href);
    const class400 = links.filter((i) => i.statusCode >= 400 && i.statusCode < 500);
    const class500 = links.filter((i) => i.statusCode >= 500);
    const brokenLinks = links.filter((i) => i.statusCode == 'broken');
    const statsResult = {
        all: allLinks.length,
        broken: brokenLinks.length,
        class400: class400.length,
        class500: class500.length
    };
    console.log(statsResult);
}

module.exports = stats;
