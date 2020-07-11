function userInput() {
    const arguments = process.argv;
    const path = arguments.splice(2, process.argv.length - 1).join(' '); 
    return path;
}

module.exports = userInput;
