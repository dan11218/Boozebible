// Controls the database for favorite drinks
const drinksDB = require('../models/drinksDB')

module.exports = {
//return favorites
index(req, res, next) {
  drinksDB.findAll()
      .then((drinks) => {
        res.locals.drinks = drinks;
        next();
      })
      .catch(err => next(err));
},

makeNewDrink(req, res, next) {
  drinksDB.save(req.body)
    .then((drink) => {
      res.locals.drink = drink;
      next();
    })
    .catch(err => next(err));
},

}
