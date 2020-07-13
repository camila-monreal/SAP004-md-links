const mdLinks = require("./md-links.js");

mdLinks("../../../testes-md-file")
  .then(links => {
console.log(links);
  })
  .catch(console.error);