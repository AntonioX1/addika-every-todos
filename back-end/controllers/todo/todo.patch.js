/**
 * 
 * Clase TodoPatch
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @exports 	TodoPatch
 * @version 	1.0.0
 * 
*/
class TodoPatch {

	/**
	 * 
	 * Constructor de la clase TodoPatch
	 * 
	 * @param 	request 		{Request Express} 	Información de la petición generada por express
	 * @param 	todoModel 	{TodoModel} 				Instancia de la clase TodoModel
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @constructor
	 * 
	*/
	constructor(request, todoModel) {

		this.request = 		request;

		this.todoModel = 	todoModel;

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
	 * @returns TodoModel
	 * 
	*/
	async execute() {

		let sequelizeModel = 					this.request.sequelize_connection.model('todos');

		this.todoModel = 							this.todoModel.patch(this.request.body);

		this.todoModel._id = 					Number(this.request.params.id);

		
		let response = 								await this.todoModel.update(sequelizeModel);

		if(!response) 								throw new ReferenceError('Todo not found');

		return await this.todoModel.readById(this.todoModel.id, sequelizeModel);
		
	}

}

module.exports = TodoPatch;