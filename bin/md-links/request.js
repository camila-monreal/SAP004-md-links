function requestLink(link) {
    const request = require('request');
    const promise = new Promise((resolve, reject) => {
        request(link, function (error, response, body) {
            if (error) {
                resolve({ statusCode: 'broken' , body:'' });
            } else {
                resolve({ statusCode: response.statusCode, body: body });
            }
        });
    });
    return promise;
}

module.exports = requestLink;
