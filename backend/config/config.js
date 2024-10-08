const options = {
  query: e => {
    console.log(e.query);
  }
};

const pgp = require('pg-promise')(options);

// SET UP THE CONNECTION STRING FOR THE DATABASE
const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString);

module.exports = db;