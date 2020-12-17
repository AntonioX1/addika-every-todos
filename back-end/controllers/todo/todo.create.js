/**
 * 
 * Clase TodoCreate
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @exports 	TodoCreate
 * @version 	1.0.0
 * 
*/
class TodoCreate {

	/**
	 * 
	 * Constructor de la clase TodoCreate
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
	 * Se hace uso del modelo inyectado para crear un nuevo registro en la base de datos
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns TodoModel
	 * 
	*/
	async execute() {

		this.todoModel._name = 				this.request.body.name;

		this.todoModel._title = 			this.request.body.title;

		this.todoModel._completed = 	(this.request.body.completed) ? this.request.body.completed : false;

		return await this.todoModel.create(this.request.sequelize_connection.model('todos'));
		
	}

}

module.exports = TodoCreate;