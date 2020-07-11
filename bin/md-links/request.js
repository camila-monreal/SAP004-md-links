function requestLink(link) {
    const request = require('request');
    const promise = new Promise((resolve, reject) => {
        request(link, function (error, response, body) {
            if (error) {
                reject(new Error('invalid link' + error));
            } else {
                resolve({ response: response, body: body });
            }
        });
    });
    return promise;
}

module.exports = requestLink;
