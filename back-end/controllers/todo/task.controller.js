const
	TaskModel = 	require('./task.model'),
	TaskCreate = 	require('./task.create'),
	TaskUpdate = 	require('./task.update'),
	TaskDelete = 	require('./task.delete'),
	TaskPatch = 	require('./task.patch')
;

/**
 * 
 * Clase TaskController
 *
 * @requires 	TaskModel,TaskCreate,TaskUpdate,TaskDelete,TaskPatch
 * @exports 	TaskController
 * @author 		Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
 * @version 	1.0.0
 *
*/
class TaskController {

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

		this._model = new TaskModel();

	}

	/**
	 * 
	 * Crea un nuevo registro
	 *
	 * Se hace uso de la clase "TaskCreate" para registrar la información
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

			let task = await new TaskCreate(request, this._model).execute();


			request.api_response.status = 	true;

			request.api_response.code = 		request.api_response.getCode(request.method);

			request.api_response.message = 	'Task created';

			request.api_response.data = 		{ task: task };

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
	 * Se hace uso del modelo "TaskModel" para obtener la información requerida
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

			let tasks = 	await this._model.readAll(request.sequelize_connection.model('tasks'));

			if(tasks.length !== 0) {

				request.api_response.status = 	true;

				request.api_response.code = 		request.api_response.getCode(request.method);

				request.api_response.message = 	'Tasks gets';

				request.api_response.data = 		{ tasks: tasks };

			} else {

				request.api_response.status = 	false;

				request.api_response.code = 		200;

				request.api_response.message = 	'Tasks not found';

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
	 * Se hace uso del modelo "TaskModel" para obtener la información requerida
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

			let task = 	await this._model.readById(request.params.id, request.sequelize_connection.model('tasks'));

			if(Object.keys(task).length !== 0) {

				request.api_response.status = 	true;

				request.api_response.code = 		request.api_response.getCode(request.method);

				request.api_response.message = 	'Task get';

				request.api_response.data = 		{ task: task };

			} else {

				request.api_response.status = 	false;

				request.api_response.code = 		404;

				request.api_response.message = 	'Task not found';

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
	 * Se hace uso del modelo "TaskUpdate" para actualizar la información requerida
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

			let task = 	await new TaskUpdate(request, this._model).execute();


			request.api_response.status = 	true;

			request.api_response.code = 		request.api_response.getCode(request.method);

			request.api_response.message = 	'Task updated';

			request.api_response.data = 		{ task: task };

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
	 * Se hace uso del modelo "TaskPatch" para actualizar la información requerida
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

			let task = await new TaskPatch(request, this._model).execute();

			
			if(Object.keys(task).length !== 0) {

				request.api_response.status = 	true;

				request.api_response.code = 		200;

				request.api_response.message = 	'Task updated';

				request.api_response.data = 		{ task: task };

			} else {

				request.api_response.status = 	false;

				request.api_response.code = 		404;

				request.api_response.message = 	'Task not found';

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
	 * Se hace uso del modelo "TaskDelete" para eliminar el registro
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

			let task = await new TaskDelete(request, this._model).execute();

			
			request.api_response.status = 	true;

			request.api_response.code = 		request.api_response.getCode(request.method);

			request.api_response.message = 	'Task deleted';

			request.api_response.data = 		task.id;

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

module.exports = TaskController;