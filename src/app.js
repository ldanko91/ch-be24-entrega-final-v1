import express from "express";
import { serverConfig } from "./config/serverConfig.config.js";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.routes.js";
import { mongoConnection } from "./utils/mongo/mongoConnection.js";
import passport from "passport";
import initializePassport from "./utils/passport/initializePassport.service.js";
import handlebars from "express-handlebars";
import ErrorMiddleware from "./utils/middlewares/errors/ErrorMiddleware.js";
import logger from "./utils/middlewares/logs/logger.middleware.js";
import Swagger from "./utils/swagger/swaggerUtil.js";

// CONFIG SERVER y DB
const app = express();
app.use(logger);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configuración de Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', process.cwd() + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(process.cwd() + '/public'));

// Configuración de Passport
initializePassport();
app.use(passport.initialize());

// Conexión a MongoDB
mongoConnection();

// Rutas
indexRouter(app);
app.use('/docs', Swagger.serve, Swagger.setup);

// Middleware de errores
app.use(ErrorMiddleware);

// Iniciar el servidor
const httpServer = app.listen(serverConfig.ExpressPort, () => {
    console.log(`Servidor conectado al puerto: ${serverConfig.ExpressPort}`);
});