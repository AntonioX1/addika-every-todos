/**
 * 
 * Clase ModelExtension
 *
 * @exports 	ModelExtension
 * @author 		Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
 * @version 	1.0.0
 *
*/
class ModelExtension {

	/**
	 * 
	 * Constructor de la clase
	 * 
	 * @notes 	Se hace uso de la convención "Guion bajo" para las propiedades o métodos privados
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @constructor
	 *
	*/
	constructor() {}

	/**
	 * 
	 * Guarda en la base de datos un registro
	 *
	 * Se comprueban los argumentos recibidos, de no cumplirse se lanza una excepción
	 * Se hace uso del modelo generado por "sequelize" para ejecutar la operación
	 * 
	 * @param 	model 	{Function} 	Modelo generado por sequelize
	 * 
	 * @notes  	Se elimina la propiedad "id", para evitar añadirlo a la sentencia, una vez sea ejecutada la sentencia se vuelve a crear
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns Object
	 *
	*/
	async create(model) {

		if(typeof model !== 'function') throw new ReferenceError(`El modelo no es válido`);

		delete this.id;

		let response = await model.create(this);

		this._id = response.id;

		return this;

	}

	/**
	 * 
	 * Obtiene toda la información de una tabla de la base de datos
	 *
	 * Se comprueban los argumentos recibidos, de no cumplirse se lanza una excepción
	 * Se hace uso del modelo generado por "sequelize" para ejecutar la operación
	 * 
	 * @param 	model 	{Function} 	modelo generado por sequelize
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns Sequelize Model
	 *
	*/
	async readAll(model) {

		if(typeof model !== 'function') throw new ReferenceError(`El modelo no es válido`);

		return await model.findAll({ order: [['id', 'ASC']] });

	}

	/**
	 * 
	 * Obtiene la información en concreto de un registro
	 *
	 * Se comprueban los argumentos recibidos, de no cumplirse se lanza una excepción
	 * Se hace uso del modelo generado por "sequelize" para ejecutar la operación
	 * 
	 * @param 	model 	{Function} 	modelo generado por sequelize
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns Object
	 *
	*/
	async readById(id, model) {

		this._id = 	Number(id);

		if(typeof model !== 'function') throw new ReferenceError(`El modelo no es válido`);

		let response  = 	await model.findByPk(this.id);

		return (response) ? this.patch(response.dataValues) : {};

	}

	/**
	 * 
	 * Actualiza en la base de datos un registro en concrto
	 *
	 * Se comprueban los argumentos recibidos, de no cumplirse se lanza una excepción
	 * Se hace uso del modelo generado por "sequelize" para ejecutar la operación
	 * 
	 * @param 	model 	{Function} 	Modelo generado por sequelize
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns 	Boolean
	 *
	*/
	async update(model) {

		if(typeof model !== 'function') throw new ReferenceError(`El modelo no es válido`);

		let response = await model.update(this, { where: { id: this.id } });

		return Number(response.toString()) > 0;

	}

	/**
	 * 
	 * Elimina de la base de datos un registro
	 *
	 * Se comprueban los argumentos recibidos, de no cumplirse se lanza una excepción
	 * Se hace uso del modelo generado por "sequelize" para ejecutar la operación
	 * 
	 * @param 	model 	{Function} 	Modelo generado por sequelize
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns Number
	 *
	*/
	async delete(model) {

		let response = 	await model.destroy({ where: { id: this.id } });

		return (Number(response.toString()) > 0) ? this.id : 0;

	}

	/**
	 * 
	 * Asigna valores a un objeto o clase
	 *
	 * Se clona el modelo requerido para después iniciar el 
	 * proceso de obtencion de claves, comparar y asignar si estas existen
	 * en los valores a evaluar, si la propiedad no existe es eliminada
	 * de la copia del modelo creada, de lo contrario se asigna un valor dinámicamnete
	 * 
	 * @param 	values 	{Object} 	Valores a comprobar y asignar con un modelo en concreto
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @returns Object
	 *
	*/
	patch(values) {

		let model = 					this._clone();

		let keysValues = 			Object.keys(values);

		let keys = 						Object.keys(model);

		if(keysValues === 0) 	throw new ReferenceError(`No existen valores por evaluar`);

		
		for(let key of keys) {

			if(keysValues.indexOf(key) !== -1) {

				model[`_${ key }`] = values[key];

			} else {

				delete model[key];

			}

		}

		return model;

	}

}

module.exports = ModelExtension;