const
	Express = 				require('express'),
	app = 						Express(),
	TaskController = 	require('./task.controller'),
	task = 						new TaskController()
;

app.get('/tasks', async (request, response) => 					task.readAll(request, response) );

app.get('/tasks/:id', async (request, response) => 			task.readById(request, response) );

app.post('/tasks', async (request, response) => 				task.create(request, response) );

app.put('/tasks/:id', async (request, response) => 			task.update(request, response) );

app.patch('/tasks/:id', async (request, response) => 		task.patch(request, response) );

app.delete('/tasks/:id', async (request, response) => 	task.delete(request, response) );

module.exports = app;