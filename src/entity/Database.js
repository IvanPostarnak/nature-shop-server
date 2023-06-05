class Database {
  constructor (engine) {
    this.engine = engine;
  }

  connect() {
    return this.engine.connect();
  }

  end() {
    return this.engine.end();
  }
};

module.exports = Database;