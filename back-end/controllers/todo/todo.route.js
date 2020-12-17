const
	Express = 				require('express'),
	app = 						Express(),
	TodoController = 	require('./todo.controller'),
	todo = 						new TodoController()
;

app.get('/todos', async (request, response) => 					todo.readAll(request, response) );

app.get('/todos/:id', async (request, response) => 			todo.readById(request, response) );

app.post('/todos', async (request, response) => 				todo.create(request, response) );

app.put('/todos/:id', async (request, response) => 			todo.update(request, response) );

app.patch('/todos/:id', async (request, response) => 		todo.patch(request, response) );

app.delete('/todos/:id', async (request, response) => 	todo.delete(request, response) );

module.exports = app;