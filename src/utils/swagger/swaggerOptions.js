const swaggerOptions = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Documentación de API E-Commerce',
            description: 'Se describirán las diferentes rutas habilitadas para la API en su sección Productos (/api/products)',
        },
    },
    apis: [`${process.cwd()}/docs/**/*.yaml`],
};

export default swaggerOptions