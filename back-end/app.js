require('dotenv').config();

const
	Express = 										require('express'),
	cors = 												require('cors'),
	app = 												Express(),
	{ urlencoded, json } = 				require('body-parser'),
	{ sequelizeMiddleware } = 		require('./db/sequelize/sequelize.middleware'),
	{ APIResponseMiddleware } = 	require('./api_response/api_response.middleware')
;

app.use(urlencoded({ extended: false }));

app.use(json());

app.use(sequelizeMiddleware);

app.use(APIResponseMiddleware);

app.use(cors());

app.use(require('./index.route'));

app.listen(process.env._SERVER_PORT, () => console.log(`Server listen to ${ process.env._SERVER_SSL }${ process.env._SERVER_HOST }:${ process.env._SERVER_PORT }`) );