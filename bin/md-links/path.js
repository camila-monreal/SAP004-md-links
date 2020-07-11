function userInput() {
    const arguments = process.argv;
    const path = arguments[2];
    const options = arguments.splice(3, 3);
    return { path: path, options: options };
}

module.exports = userInput;
