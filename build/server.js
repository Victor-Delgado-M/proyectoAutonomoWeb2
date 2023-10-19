"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const Logging_1 = __importDefault(require("./library/Logging"));
const Ciudad_1 = __importDefault(require("./routes/Ciudad"));
const Sector_1 = __importDefault(require("./routes/Sector"));
const Cevicheria_1 = __importDefault(require("./routes/Cevicheria"));
const Empleado_1 = __importDefault(require("./routes/Empleado"));
const Cliente_1 = __importDefault(require("./routes/Cliente"));
const Plato_1 = __importDefault(require("./routes/Plato"));
const Pedido_1 = __importDefault(require("./routes/Pedido"));
const cors_1 = __importDefault(require("cors"));
//Importaciones para documentar en swagger
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions_1 = require("./swaggerOptions");
//Importaciones opciones de swagger
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_1.options);
const router = (0, express_1.default)();
/** Conexion a la base de datos MONGO */
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
    Logging_1.default.info('Mongo connected successfully.');
    StartServer();
})
    .catch((error) => Logging_1.default.error(error));
const StartServer = () => {
    router.use((req, res, next) => {
        Logging_1.default.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on('finish', () => {
            Logging_1.default.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });
        next();
    });
    router.use((0, cors_1.default)());
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });
    /** Todas mis rutas*/
    router.use('/ciudad', Ciudad_1.default);
    router.use('/sector', Sector_1.default);
    router.use('/cevicheria', Cevicheria_1.default);
    router.use('/empleado', Empleado_1.default);
    router.use('/cliente', Cliente_1.default);
    router.use('/plato', Plato_1.default);
    router.use('/pedido', Pedido_1.default);
    router.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    router.get('/hello', (req, res, next) => res.status(200).json({ hello: 'world' }));
    /** Por si una ruta no existe */
    router.use((req, res, next) => {
        const error = new Error('Not found');
        Logging_1.default.error(error);
        res.status(404).json({
            message: error.message
        });
    });
    http_1.default.createServer(router).listen(config_1.config.server.port, () => Logging_1.default.info(`Servidor iniciado en el puerto ${config_1.config.server.port}`));
};
