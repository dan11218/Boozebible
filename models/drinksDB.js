const pgp      = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db       = pgp(dbConfig);

module.exports = {

findAll() {
  return db.many(`
    SELECT *
    FROM saved_drinks
    ORDER BY id
  `);
},

save(drink) {
  return db.one(`
    INSERT
    INTO saved_drinks (name, ingredient)
    VALUES ($/name/,$/ingredient/)
    RETURNING *
      `, drink);
  }

}
