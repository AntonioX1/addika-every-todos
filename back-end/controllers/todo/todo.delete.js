/**
 * 
 * Clase TodoDelete
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @exports 	TodoDelete
 * @version 	1.0.0
 * 
*/
class TodoDelete {

	/**
	 * 
	 * Constructor de la clase TodoDelete
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
	 * Se hace uso de la clase "TodoModel" para crear un nuevo registro en la base de datos
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns TodoModel
	 * 
	*/
	async execute() {

		this.todoModel._id = 					Number(this.request.params.id);

		let response = 								await this.todoModel.delete(this.request.sequelize_connection.model('todos'));

		if(!response) 								throw new ReferenceError('Todo not found');

		return this.todoModel;
		
	}

}

module.exports = TodoDelete;