const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Hous- API',
    description: '하우스 api입니다.'
  },
  host: 'localhost:8000',
  schemes: ['http'],
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      in: 'header',
      bearerFormat: 'JWT'
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/index.ts'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
