import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';
import ciudadRoutes from './routes/Ciudad';
import sectorRoutes from './routes/Sector';
import cevicheriaRoutes from './routes/Cevicheria';
import empleadoRoutes from './routes/Empleado';
import clienteRoutes from './routes/Cliente';
import platoRoutes from './routes/Plato';
import pedidoRoutes from './routes/Pedido';
import cors from 'cors';


//Importaciones para documentar en swagger
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions';

//Importaciones opciones de swagger
const specs = swaggerJSDoc(options);

const router = express();

/** Conexion a la base de datos MONGO */
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('Mongo connected successfully.');
        StartServer();
    })
    .catch((error) => Logging.error(error));

const StartServer = () => {
    router.use((req, res, next) => {
        Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });

        next();
    });

    router.use(cors());
    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());



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
    router.use('/ciudad', ciudadRoutes);
    router.use('/sector', sectorRoutes);
    router.use('/cevicheria', cevicheriaRoutes);
    router.use('/empleado', empleadoRoutes);
    router.use('/cliente', clienteRoutes);
    router.use('/plato', platoRoutes);
    router.use('/pedido', pedidoRoutes);
    router.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

    router.get('/hello', (req, res, next) => res.status(200).json({ hello: 'world' }));

    /** Por si una ruta no existe */
    router.use((req, res, next) => {
        const error = new Error('Not found');

        Logging.error(error);

        res.status(404).json({
            message: error.message
        });
    });

    http.createServer(router).listen(config.server.port, () => Logging.info(`Servidor iniciado en el puerto ${config.server.port}`));
};

