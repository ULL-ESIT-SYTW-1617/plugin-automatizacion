const build = require('./build');

const generar = () => {
  build.convert();
}

const pushear = () => {
  build.deploy();
}

module.exports.generar = generar;
module.exports.pushear = pushear;
