/**
 * 
 * Clase TaskPatch
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @exports 	TaskPatch
 * @version 	1.0.0
 * 
*/
class TaskPatch {

	/**
	 * 
	 * Constructor de la clase TaskPatch
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
	 * Se hace uso del modelo inyectado para crear actualizar solo una parte de un registro
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns taskModel
	 * 
	*/
	async execute() {

		let sequelizeModel = 					this.request.sequelize_connection.model('tasks');

		this.taskModel = 							this.taskModel.patch(this.request.body);

		this.taskModel._id = 					Number(this.request.params.id);

		
		let response = 								await this.taskModel.update(sequelizeModel);

		if(!response) 								throw new ReferenceError('Task not found');

		return await this.taskModel.readById(this.taskModel.id, sequelizeModel);
		
	}

}

module.exports = TaskPatch;