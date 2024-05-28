import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'
import swaggerOptions from './swaggerOptions.js';

const specs = swaggerJSDoc(swaggerOptions);
const Swagger = {
    serve: swaggerUiExpress.serve,
    setup: swaggerUiExpress.setup(specs)
}

export default Swagger