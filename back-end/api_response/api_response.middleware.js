const APIResponse = 	require('./api_response');

/**
 * 
 * Clase APIResponseMiddleware
 * 
 * @author  	Antonio Cortés <antonio.cortes.1901@gmail.com>
 * @requires 	APIResponse
 * @exports 	APIResponseMiddleware
 * @version 	6.0.0
 * 
*/
class APIResponseMiddleware {

	/**
	 * 
	 * Obtiene una instancia de APIResponse
	 * 
	 * Se hace uso de los middlewares de express para
	 * crear una propiedad en "request" con el nombre de
	 * "api_response" la cual contendrá la instancia de la clase "APIResponse"
	 * 
	 * @author  Antonio Cortés <antonio.cortes.1901@gmail.com>
	 * @async
	 * @returns APIResponse
	 * 
	*/
	async APIResponseMiddleware(request, response, next) {

		request.api_response = new APIResponse();

		next();

	}

}

module.exports = { APIResponseMiddleware: new APIResponseMiddleware().APIResponseMiddleware };