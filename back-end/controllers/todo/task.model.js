const ModelExtension = require('../../model_extension');

/**
 * 
 * Clase TaskModel
 *
 * @requires 	ModelExtension
 * @extends 	ModelExtension
 * @exports 	TaskModel
 * @author 		Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
 * @version 	1.0.0
 *
*/
class TaskModel extends ModelExtension {

	/**
	 * 
	 * Constructor de la clase
	 * 
	 * @notes 	Se hace uso de la convención "Guion bajo" para las propiedades o métodos privados
	 * @notes 	Las variables son asignadas mediante setters
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @constructor
	 *
	*/
	constructor() {

		super();

		this.id = 					0;

		this.title = 				'';

		this.description = 	'';

		this.completed = 		false;
		
	}

	/**
	 * 
	 * Setter de la propiedad id
	 *
	 * Se comprueban los argumentos recibidos, de no cumplirse se lanza una excepción,
	 * si todo esta bien se asigna el valor de id
	 * 
	 * @param 	value 	{Number} 	Valor a asignar
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @returns Void
	 *
	*/
	set _id(value) {

		if(typeof value !== 'number') 	throw new ReferenceError(`El identificador debe de ser de tipo Number`);

		if(!Number.isFinite(value)) 		throw new ReferenceError(`El identificador no es un número válido`);

		if(value <= 0) 									throw new ReferenceError(`El identificador debe de ser mayor a cero`);

		this.id = value;

	}

	/**
	 * 
	 * Setter de la propiedad title
	 *
	 * Se comprueban los argumentos recibidos, de no cumplirse se lanza una excepción,
	 * si todo esta bien se asigna el valor de title
	 * 
	 * @param 	value 	{String} 	Valor a asignar
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @returns Void
	 *
	*/
	set _title(value) {

		if(typeof value !== 'string') 	throw new ReferenceError(`El título debe de ser de tipo string`);

		if(value.trim().length === 0) 	throw new ReferenceError(`El título no contiene algún valor`);

		if(value.length >= 100) 				throw new ReferenceError(`El título supera la cantidad de caracteres permitido`);

		this.title = value;
		
	}

	/**
	 * 
	 * Setter de la propiedad description
	 *
	 * Se comprueban los argumentos recibidos, de no cumplirse se lanza una excepción,
	 * si todo esta bien se asigna el valor de description
	 * 
	 * @param 	value 	{String} 	Valor a asignar
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @returns Void
	 *
	*/
	set _description(value) {

		if(typeof value !== 'string') 	throw new ReferenceError(`La descripción debe de ser de tipo string`);

		if(value.trim().length === 0) 	throw new ReferenceError(`La descripción no contiene algún valor`);

		this.description = value;

	}

	/**
	 * 
	 * Setter de la propiedad completed
	 *
	 * Se comprueban los argumentos recibidos, de no cumplirse se lanza una excepción,
	 * si todo esta bien se asigna el valor de completed
	 * 
	 * @param 	value 	{Boolean} 	Valor a asignar
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @returns Void
	 *
	*/
	set _completed(value) {

		if(typeof value !== 'boolean') 	throw new ReferenceError(`La propiedad "completed" debe de ser de tipo boolean`);

		this.completed = value;
		
	}

	/**
	 * 
	 * Crea una propia instancia de la clase
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @returns TaskModel
	 *
	*/
	_clone() {

		return new TaskModel();

	}

}

module.exports = TaskModel;