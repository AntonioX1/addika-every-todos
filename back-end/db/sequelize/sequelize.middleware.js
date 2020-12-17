const SequelizeConnect = 	require('./sequelize.connect');

/**
 * 
 * Clase SequelizeMiddleware
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @requires 	SequelizeConnect
 * @exports 	SequelizeMiddleware
 * @version 	1.0.0
 * 
*/
class SequelizeMiddleware {

	/**
	 * 
	 * Obtiene una instancia de conexión
	 * 
	 * Se hace uso de los middlewares de express para
	 * crear una propiedad en "request" con el nombre de
	 * "sequelize_connection" la cual contendrá una conexión "Sequelize"
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns Sequelize
	 * 
	*/
	async sequelizeMiddleware(request, response, next) {

		await SequelizeConnect._getInstance().loadModels();

		request.sequelize_connection = await SequelizeConnect._getInstance()._connection;

		next();

	}

}

module.exports = { sequelizeMiddleware: new SequelizeMiddleware().sequelizeMiddleware };