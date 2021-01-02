/**
 * 
 * Clase TaskDelete
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @exports 	TaskDelete
 * @version 	1.0.0
 * 
*/
class TaskDelete {

	/**
	 * 
	 * Constructor de la clase TaskDelete
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
	 * Se hace uso de la clase "taskModel" para crear un nuevo registro en la base de datos
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns taskModel
	 * 
	*/
	async execute() {

		this.taskModel._id = 					Number(this.request.params.id);

		let response = 								await this.taskModel.delete(this.request.sequelize_connection.model('tasks'));

		if(!response) 								throw new ReferenceError('Task not found');

		return this.taskModel;
		
	}

}

module.exports = TaskDelete;