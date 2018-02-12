const express          = require('express');
const drinksController = require('../controllers/drinksController');
const cocktailAPI      = require('../services/cocktailsAPI.js');
const viewController   = require('../controllers/viewController')
// Export routes
const appRouter        = express.Router();

appRouter.route('/byname')
  .post(cocktailAPI.drinkByName);

appRouter.route('/random')
  .get(cocktailAPI.drinkOfTheDay);

//The view controller renders the page wih the ejs file
//The drink controller returns object from the database
appRouter.route('/favorites')
  .get(viewController.showFavorites, drinksController.index, viewController.show404)
  .post(drinksController.makeNewDrink, viewController.show406);


appRouter.route('/')
  .get(cocktailAPI.drinkOfTheDay);



module.exports = appRouter;
