const
	Express = require('express'),
	app = 		Express()
;

app.use(require('./controllers/todo/todo.route'));

module.exports = app;