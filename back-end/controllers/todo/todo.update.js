/**
 * 
 * Clase TodoUpdate
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @exports 	TodoUpdate
 * @version 	1.0.0
 * 
*/
class TodoUpdate {

	/**
	 * 
	 * Constructor de la clase TodoUpdate
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
	 * Se hace uso del modelo inyectado para actualizar toda la información
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns TodoModel
	 * 
	*/
	async execute() {

		this.todoModel._id = 					Number(this.request.params.id);

		this.todoModel._name = 				this.request.body.name;

		this.todoModel._title = 			this.request.body.title;

		this.todoModel._completed = 	(this.request.body.completed) ? this.request.body.completed : false;

		let response = 								await this.todoModel.update(this.request.sequelize_connection.model('todos'));

		if(!response) 								throw new ReferenceError('Todo not found');

		return this.todoModel;
		
	}

}

module.exports = TodoUpdate;