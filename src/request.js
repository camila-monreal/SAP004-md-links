function requestLink(link, path) {
    const request = require('request');
    const promise = new Promise((resolve, reject) => {
        request(link, function (error, response, body) {
            if (error) {
                resolve({link: link, statusCode: 'broken' , body:'', path: path });
            } else {
                resolve({link: link, statusCode: response.statusCode, body: body, path: path});
            }
        });
    });
    return promise;
}

module.exports = requestLink;
