import axios 	from 'axios'

export const apiGet = (url, key) => async () => {

	let response = 	[];

	try {

		let { data } = 	await axios({
			'method': 	'GET',
			'url': 			url
		})

		if(!data.status) throw Error(data.message)

		response = 	data.data[key];

	} catch(error) {

		console.error(error)

	} finally {

		return response

	}

}

export const apiPost = (url, key, serialize) => async () => {

	let response = 	[];

	try {

		let { data } = 	await axios({
			'method': 	'POST',
			'url': 			url,
			'data': 		serialize
		})

		if(!data.status) throw Error(data.message)

		response = 	data.data[key];

	} catch(error) {

		console.error(error)

	} finally {

		return response

	}

}

export const apiPut = (url, key, id, serialize) => async () => {

	let response = 	[];

	try {

		let { data } = 	await axios({
			'method': 	'PUT',
			'url': 			`${ url }/${ id }`,
			'data': 		serialize
		})

		if(!data.status) throw Error(data.message)

		response = 	data.data[key];

	} catch(error) {

		console.error(error)

	} finally {

		return response

	}

}

export const apiDelete = (url, id) => async () => {

	let response = 	[];

	try {

		let { data } = 	await axios({
			'method': 	'DELETE',
			'url': 			`${ url }/${ id }`
		})

		if(!data.status) throw Error(data.message)

		response = 	data.data;

	} catch(error) {

		console.error(error)

	} finally {

		return response

	}

}

export const apiPatch = (url, key, id, serialize) => async () => {

	let response = 	[];

	try {

		let { data } = 	await axios({
			'method': 	'PATCH',
			'url': 			`${ url }/${ id }`,
			'data': 		serialize
		})

		if(!data.status) throw Error(data.message)

		response = 	data.data[key];

	} catch(error) {

		console.error(error)

	} finally {

		return response

	}

}