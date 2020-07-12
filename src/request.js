function requestLink(link) {
    const request = require('request');
    const promise = new Promise((resolve, reject) => {
        request(link, function (error, response, body) {
            if (error) {
                resolve({link: link, statusCode: 'broken' , body:'' });
            } else {
                resolve({link: link, statusCode: response.statusCode, body: body });
            }
        });
    });
    return promise;
}

module.exports = requestLink;
