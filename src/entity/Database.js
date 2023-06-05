class Database {
  constructor (client) {
    this.client = client;
  }

  connect() {
    return this.client.connect();
  }

  end() {
    return this.client.end();
  }
};

module.exports = Database;