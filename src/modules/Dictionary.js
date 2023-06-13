const dictionary = require("../config/dictionary.config");

class Dictionary {
  constructor(engine) {
    this.engine = engine;
  }

  configureKey(params) {
    const filteredArray = Array.from(params).filter(elem => elem != undefined);
    const string = filteredArray.reduce((acc, arg) => acc += `${arg} `, '').trim();
    return string;
  }

  get() {
    const key = this.configureKey(arguments);
    return this.engine.get(key);
  }
}

module.exports = new Dictionary(dictionary);