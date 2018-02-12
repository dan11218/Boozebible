const request = require('request-promise');

module.exports = {
  // Search by name
    drinkByName(req, res, next) {
      request(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.drink}`)
      .then((response) => {
        return JSON.parse(response);
      })
      .then((responseJSON) => {
        res.locals.drinks = responseJSON.drinks;
        console.log(res.locals.drinks);
        res.render('byname', {
          data: res.locals.drinks,
        });
        })
      .catch((err) => {
        res.locals.drinkByName = "Search not valid"
      });
    },

// Random cocktail
  drinkOfTheDay(req, res, next) {
    request('http://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => {
      return JSON.parse(response);
    })
    .then((responseJSON) => {
      res.locals.drinks = responseJSON.drinks;
      console.log(responseJSON, 'drink response');
      res.render('random', {
        data: res.locals.drinks,
      });
    })
    .catch((err) => {
      console.log(err);
      res.locals.drinkOfTheDay = 'Under development, stay thirsty my freinds...';
      next();
    });
  }
}
