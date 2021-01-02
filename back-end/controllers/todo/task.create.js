/**
 * 
 * Clase TaskCreate
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @exports 	TaskCreate
 * @version 	1.0.0
 * 
*/
class TaskCreate {

	/**
	 * 
	 * Constructor de la clase TaskCreate
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
	 * Se hace uso del modelo inyectado para crear un nuevo registro en la base de datos
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns taskModel
	 * 
	*/
	async execute() {

		this.taskModel._title = 				this.request.body.title;

		this.taskModel._description = 	this.request.body.description;

		this.taskModel._completed = 		(this.request.body.completed) ? this.request.body.completed : false;

		return await this.taskModel.create(this.request.sequelize_connection.model('tasks'));
		
	}

}

module.exports = TaskCreate;