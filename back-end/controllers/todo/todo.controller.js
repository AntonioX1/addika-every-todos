const
	TodoModel = 	require('./todo.model'),
	TodoCreate = 	require('./todo.create'),
	TodoUpdate = 	require('./todo.update'),
	TodoDelete = 	require('./todo.delete'),
	TodoPatch = 	require('./todo.patch')
;

/**
 * 
 * Clase TodoController
 *
 * @requires 	TodoModel,TodoCreate,TodoUpdate,TodoDelete,TodoPatch
 * @exports 	TodoController
 * @author 		Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
 * @version 	1.0.0
 *
*/
class TodoController {

	/**
	 * 
	 * Constructor de la clase
	 * 
	 * @notes 	Se hace uso de la convención "Guion bajo" para las propiedades o métodos privados
	 * @notes 	Se crea la propiedad "_model" la cual será inyectada y usada en los diferentes métodos requeridos
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @constructor
	 *
	*/
	constructor() {

		this._model = new TodoModel();

	}

	/**
	 * 
	 * Crea un nuevo registro
	 *
	 * Se hace uso de la clase "TodoCreate" para registrar la información
	 * Se define una estructura de bloques try, catch, finally 
	 * para controlar el tipo de respuesta y capturar cualquier posible error
	 * 
	 * @param 	request 	{Request Express} 	Información de la petición generada por express
	 * @param 	response 	{Response Express} 	Información de la petición generada por express
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns APIResponse
	 *
	*/
	async create(request, response) {

		try {

			let todo = await new TodoCreate(request, this._model).execute();


			request.api_response.status = 	true;

			request.api_response.code = 		request.api_response.getCode(request.method);

			request.api_response.message = 	'Todo created';

			request.api_response.data = 		{ todo: todo };

		} catch(error) {

			request.api_response.status = 	false;

			request.api_response.code = 		(error.name === 'Error') ? 400 : 500;

			request.api_response.message = 	error.message;

			request.api_response.data = 		{ "error": error };

			console.log(error);

		} finally {

			response.status(request.api_response.code).json(request.api_response);

		}

	}

	/**
	 * 
	 * Obtiene toda la información de una tabla de la base de datos
	 *
	 * Se hace uso del modelo "TodoModel" para obtener la información requerida
	 * Se define una estructura de bloques try, catch, finally 
	 * para controlar el tipo de respuesta y capturar cualquier posible error
	 * 
	 * @param 	request 	{Request Express} 	Información de la petición generada por express
	 * @param 	response 	{Response Express} 	Información de la petición generada por express
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns APIResponse
	 *
	*/
	async readAll(request, response) {

		try {

			let todos = 	await this._model.readAll(request.sequelize_connection.model('todos'));

			if(todos.length !== 0) {

				request.api_response.status = 	true;

				request.api_response.code = 		request.api_response.getCode(request.method);

				request.api_response.message = 	'Todos gets';

				request.api_response.data = 		{ todos: todos };

			} else {

				request.api_response.status = 	false;

				request.api_response.code = 		200;

				request.api_response.message = 	'Todos not found';

				request.api_response.data = 		{ };

			}

		} catch(error) {

			request.api_response.status = 	false;

			request.api_response.code = 		(error.name === 'Error') ? 400 : 500;

			request.api_response.message = 	error.message;

			request.api_response.data = 		{ "error": error };

			console.log(error);

		} finally {

			response.status(request.api_response.code).json(request.api_response);

		}
		
	}

	/**
	 * 
	 * Obtiene información en concreta de una tabla de la base de datos
	 *
	 * Se hace uso del modelo "TodoModel" para obtener la información requerida
	 * Se define una estructura de bloques try, catch, finally 
	 * para controlar el tipo de respuesta y capturar cualquier posible error
	 * 
	 * @param 	request 	{Request Express} 	Información de la petición generada por express
	 * @param 	response 	{Response Express} 	Información de la petición generada por express
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns APIResponse
	 *
	*/
	async readById(request, response) {

		try {

			let todo = 	await this._model.readById(request.params.id, request.sequelize_connection.model('todos'));

			if(Object.keys(todo).length !== 0) {

				request.api_response.status = 	true;

				request.api_response.code = 		request.api_response.getCode(request.method);

				request.api_response.message = 	'Todo get';

				request.api_response.data = 		{ todo: todo };

			} else {

				request.api_response.status = 	false;

				request.api_response.code = 		404;

				request.api_response.message = 	'Todo not found';

				request.api_response.data = 		{ };

			}

		} catch(error) {

			request.api_response.status = 	false;

			request.api_response.code = 		(error.name === 'Error') ? 400 : 500;

			request.api_response.message = 	error.message;

			request.api_response.data = 		{ "error": error };

			console.log(error);

		} finally {

			response.status(request.api_response.code).json(request.api_response);

		}
		
	}

	/**
	 * 
	 * Actualiza la información de un registro en concreto
	 *
	 * Se hace uso del modelo "TodoUpdate" para actualizar la información requerida
	 * Se define una estructura de bloques try, catch, finally 
	 * para controlar el tipo de respuesta y capturar cualquier posible error
	 * 
	 * @param 	request 	{Request Express} 	Información de la petición generada por express
	 * @param 	response 	{Response Express} 	Información de la petición generada por express
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns APIResponse
	 *
	*/
	async update(request, response) {

		try {

			let todo = 	await new TodoUpdate(request, this._model).execute();


			request.api_response.status = 	true;

			request.api_response.code = 		request.api_response.getCode(request.method);

			request.api_response.message = 	'Todo updated';

			request.api_response.data = 		{ todo: todo };

		} catch(error) {

			request.api_response.status = 	false;

			request.api_response.code = 		(error.name === 'Error') ? 400 : 500;

			request.api_response.message = 	error.message;

			request.api_response.data = 		{ "error": error };

			console.log(error);

		} finally {

			response.status(request.api_response.code).json(request.api_response);

		}

	}

	/**
	 * 
	 * Actualiza solo una partte de unaa información de un registro en concreto
	 *
	 * Se hace uso del modelo "TodoPatch" para actualizar la información requerida
	 * Se define una estructura de bloques try, catch, finally 
	 * para controlar el tipo de respuesta y capturar cualquier posible error
	 * 
	 * @param 	request 	{Request Express} 	Información de la petición generada por express
	 * @param 	response 	{Response Express} 	Información de la petición generada por express
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns APIResponse
	 *
	*/
	async patch(request, response) {

		try {

			let todo = await new TodoPatch(request, this._model).execute();

			
			if(Object.keys(todo).length !== 0) {

				request.api_response.status = 	true;

				request.api_response.code = 		200;

				request.api_response.message = 	'Todo updated';

				request.api_response.data = 		{ todo: todo };

			} else {

				request.api_response.status = 	false;

				request.api_response.code = 		404;

				request.api_response.message = 	'Todo not found';

				request.api_response.data = 		{ };

			}

		} catch(error) {

			request.api_response.status = 	false;

			request.api_response.code = 		(error.name === 'Error') ? 400 : 500;

			request.api_response.message = 	error.message;

			request.api_response.data = 		{ "error": error };

			console.log(error);

		} finally {

			response.status(request.api_response.code).json(request.api_response);

		}

	}

	/**
	 * 
	 * Elimina un registro en concreto
	 *
	 * Se hace uso del modelo "TodoDelete" para eliminar el registro
	 * Se define una estructura de bloques try, catch, finally 
	 * para controlar el tipo de respuesta y capturar cualquier posible error
	 * 
	 * @param 	request 	{Request Express} 	Información de la petición generada por express
	 * @param 	response 	{Response Express} 	Información de la petición generada por express
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns APIResponse
	 *
	*/
	async delete(request, response) {

		try {

			let todo = await new TodoDelete(request, this._model).execute();

			
			request.api_response.status = 	true;

			request.api_response.code = 		request.api_response.getCode(request.method);

			request.api_response.message = 	'Todo deleted';

			request.api_response.data = 		todo.id;

		} catch(error) {

			request.api_response.status = 	false;

			request.api_response.code = 		(error.name === 'Error') ? 400 : 500;

			request.api_response.message = 	error.message;

			request.api_response.data = 		{ "error": error };

			console.log(error);

		} finally {

			response.status(request.api_response.code).json(request.api_response);

		}

	}

}

module.exports = TodoController;