/**
 * 
 * Clase APIResponse
 *
 * @author 		Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
 * @exports 	APIResponse
 * @version 	6.0.0
 *
*/
class APIResponse {

	/**
	 * 
	 * Constructor de la clase
	 * 
	 * @param 	status 		{Boolean}	 	Estatus de la acción realizada
	 * @param 	code 			{Number}	 	Código de respuesta
	 * @param 	message		{String}	 	Mensaje de la respuesta
	 * @param 	data			{Object} 		Resultado de la acción realizada
	 * 
	 * @notes 	Código 200: La solicitud ha tenido éxito
	 * @notes 	Código 201: La solicitud ha tenido éxito y ha llevado a la creación de un recurso
	 * @notes 	Código 400: la solicitud dada contiene una sintaxis inválida
	 * @notes 	Código 401: la solicitud require de una autenticación
	 * @notes 	Código 404: El servidor no pudo encontrar el contenido solicitado
	 * @notes 	Código 409: Una petición tiene conflicto con el estado actual del servidor
	 * @notes 	Código 500: El servidor ha encontrado una situación que no sabe cómo manejarla
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @constructor
	 *
	*/
	constructor(status, code, message, data) {

		this.status = 	false;

		this.code = 		200;

		this.message = 	'Mensaje predeterminado';

		this.data = 		{};

	}

	/**
	 * 
	 * Obtiene el código de respuesta
	 *
	 * Se comprueba el método de la petición obteniendo
	 * el código de respuesta correspondiente
	 * 
	 * @param 	requestMethod 	{String}	 Método de la petición a evaluar
	 *
	 * @author 	Marco Antonio González Cortés <antonio.cortes.1901@gmail.com>
	 * @returns Number
	 *
	*/
	getCode(requestMethod) {

		if(requestMethod === 'GET') 		return 200;

		if(requestMethod === 'POST') 		return 201;

		if(requestMethod === 'PUT') 		return 200;

		if(requestMethod === 'DELETE') 	return 200;

	}

}

module.exports = APIResponse;