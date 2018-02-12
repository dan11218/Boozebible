require('dotenv').config()
const express        = require('express');
const path           = require('path');
const logger         = require('morgan');
const methodOverride = require('method-override');
const bodyParser     = require('body-parser');
const cocktailRouter = require('./routes/cocktails');
const ejs            = require('ejs')

//Port defined
const PORT = process.env.PORT || 3000;

//Use express
const app = express();

//Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Static file
app.use('/static', express.static(path.join(__dirname, 'public')));

//Use Morgan
app.use(logger('dev'));

//App use body-parser
app.use(bodyParser.urlencoded({
	extended: false,
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/drink', cocktailRouter);

//Routes
app.get('/', (req, res) => {
	res.render('index', {
		message: 'Boozebible',
	});
});


//Listen on PORT 3000
app.listen(PORT, () => {
	  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});
