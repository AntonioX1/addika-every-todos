const
	Express = require('express'),
	app = 		Express()
;

app.use(require('./controllers/todo/task.route'));

module.exports = app;