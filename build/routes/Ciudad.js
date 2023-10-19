"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Ciudad_1 = __importDefault(require("../controllers/Ciudad")); // Importa el controlador adecuado
const Joi_1 = require("../middleware/Joi");
const router = express_1.default.Router();
/**
 * @swagger
 *
 * /ciudad:
 *   post:
 *     summary: Crear una nueva ciudad
 *     description: Crea una nueva ciudad.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ciudad'
 *     responses:
 *       201:
 *         description: Ciudad creada exitosamente.
 *       422:
 *         description: Datos de entrada no válidos.
 *
 *   get:
 *     summary: Obtener todas las ciudades
 *     description: Obtiene una lista de todas las ciudades.
 *     responses:
 *       200:
 *         description: Lista de ciudades exitosamente obtenida.
 *       500:
 *         description: Error en el servidor.
 *
 * /ciudad/{ciudadId}:
 *   get:
 *     summary: Obtener una ciudad por ID
 *     description: Obtiene una ciudad por su ID.
 *     parameters:
 *       - in: path
 *         name: ciudadId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ciudad a obtener.
 *     responses:
 *       200:
 *         description: Ciudad exitosamente obtenida.
 *       404:
 *         description: Ciudad no encontrada.
 *       500:
 *         description: Error en el servidor.
 *
 *   patch:
 *     summary: Actualizar una ciudad
 *     description: Actualiza una ciudad existente.
 *     parameters:
 *       - in: path
 *         name: ciudadId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ciudad a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ciudad'
 *     responses:
 *       201:
 *         description: Ciudad actualizada exitosamente.
 *       404:
 *         description: Ciudad no encontrada.
 *       422:
 *         description: Datos de entrada no válidos.
 *       500:
 *         description: Error en el servidor.
 *
 *   delete:
 *     summary: Eliminar una ciudad
 *     description: Elimina una ciudad por su ID.
 *     parameters:
 *       - in: path
 *         name: ciudadId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ciudad a eliminar.
 *     responses:
 *       201:
 *         description: Ciudad eliminada exitosamente.
 *       404:
 *         description: Ciudad no encontrada.
 *       500:
 *         description: Error en el servidor.
 */
router.post('/', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.ciudad.create), Ciudad_1.default.createCiudad);
router.get('/', Ciudad_1.default.readAllCiudades);
router.get('/:ciudadId', Ciudad_1.default.readCiudad);
router.patch('/:ciudadId', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.ciudad.update), Ciudad_1.default.updateCiudad);
router.delete('/:ciudadId', Ciudad_1.default.deleteCiudad);
module.exports = router;
