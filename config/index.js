const expressJwt = require('express-jwt');

// Here based on your environment, you can load env file 
// will work with .env file only
require('custom-env').env('dev') ; // load dev env file configs

let ENV_VARIABLES = process.env;

/*
 Auth0 auth middleware for express-jwt
*/
const jwtCheck = expressJwt({
  secret: 'product-catalog-secret',
  algorithms: ['RS256']
});

const config = {
  env: ENV_VARIABLES.NODE_ENV,
  port: ENV_VARIABLES.SERVER_PORT || 9000,
  jwtExpiresIn: 86400,
  jwtMiddleware: jwtCheck,
  mongoUri : ENV_VARIABLES.DB_CONNECTION_STRING,
  ...ENV_VARIABLES, // conbine other configs to directly access in the application
};


console.log(config.env);

module.exports = config;
