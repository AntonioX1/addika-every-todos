const
	{ Sequelize } = 		require('sequelize'),
	FileSystem =        require('fs'),
	Path =              require('path'),
	Basename =          Path.basename(__filename),
	DB =                {}
;
/**
 * 
 * Clase SequelizeConnect
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @requires 	Sequelize
 * @exports 	SequelizeConnect
 * @version 	1.0.0
 * 
*/
class SequelizeConnect {

	/**
	 * 
	 * Constructor de la clase SequelizeConnect
	 * 
	 * @see 		https://sequelize.org/master/manual/getting-started.html
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @constructor
	 * 
	*/
	constructor() {

		//////////////////////////////////
		// Credenciales de conexión
		//////////////////////////////////
		this._connection = 	new Sequelize(
			process.env._DB_DATABASE,
			process.env._DB_USERNAME,
			process.env._DB_PASSWORD, {
				host:     process.env._SERVER_HOST,
				dialect:  process.env._DB_DIALECT,
				logging: 	false
		});

	}

	/**
	 * 
	 * Obtiene una instancia de la clase
	 * 
	 * Se hace uso del patrón singleton para generar
	 * una única instancia de la clase
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @static
	 * @returns SequelizeConnect
	 * 
	*/
	static _getInstance() {

		return (this._instance) ? this._instance : this._instance = new this();

	}
	
	/**
	 * 
	 * Comprueba el estado de la conexión
	 * 
	 * Se hace uso del método "authenticate" propio de "Sequelize"
	 * para realizar la comprobación de conexión
	 * 
	 * @see 		https://sequelize.org/master/manual/getting-started.html#testing-the-connection
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns Boolean
	 * 
	*/
	async testConnection() {

		let response = 	false;

		try {

			await this._connection.authenticate();

			response = 	true;

		} catch(error) {

			console.log(error.message);

		} finally {

			return response;

		}

	}

	/**
	 * 
	 * ...
	 * 
	 * ...
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns ...
	 * 
	*/
	async loadModels() {

		try {

			let pathRelative = Path.join(__dirname, '..', 'models');

			FileSystem
			.readdirSync(pathRelative)
			.filter(file => {
				return (file.indexOf('.') !== 0) && (file !== Basename) && (file.slice(-3) === '.js');
			})
			.forEach(file => {
				const model = require(Path.join(pathRelative, file))(SequelizeConnect._getInstance()._connection, Sequelize.DataTypes);
				DB[model.name] = model;
			});

			Object.keys(DB).forEach(modelName => {
				if (DB[modelName].associate) {
					DB[modelName].associate(DB);
				}
			});

			DB.SequelizeConnect._getInstance()._connection = SequelizeConnect._getInstance()._connection;
			DB.Sequelize = Sequelize;

		} catch(error) {

			console.error();

		}

	}

}

module.exports = SequelizeConnect;