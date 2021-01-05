/**
 * 
 * Clase TaskUpdate
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @exports 	TaskUpdate
 * @version 	1.0.0
 * 
*/
class TaskUpdate {

	/**
	 * 
	 * Constructor de la clase TaskUpdate
	 * 
	 * @param 	request 		{Request Express} 	Información de la petición generada por express
	 * @param 	taskModel 	{TaskModel} 				Instancia de la clase TaskModel
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @constructor
	 * 
	*/
	constructor(request, taskModel) {

		this.request = 		request;

		this.taskModel = 	taskModel;

	}

	/**
	 * 
	 * Método principal de la clase
	 * 
	 * Se comprueban los argumentos recibidos mediante el modelo correspondiente,
	 * de no cumplirse se lanza una exepción
	 * Se hace uso del modelo inyectado para actualizar toda la información
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns taskModel
	 * 
	*/
	async execute() {

		this.taskModel._id = 						Number(this.request.params.id);

		this.taskModel._title = 				this.request.body.title;

		this.taskModel._description = 	this.request.body.description;

		this.taskModel._completed = 		(this.request.body.completed) ? this.request.body.completed : false;

		let response = 									await this.taskModel.update(this.request.sequelize_connection.model('tasks'));

		if(!response) 									throw new ReferenceError('Task not found');

		return this.taskModel;
		
	}

}

module.exports = TaskUpdate;