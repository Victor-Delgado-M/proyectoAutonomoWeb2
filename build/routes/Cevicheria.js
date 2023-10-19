"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Cevicheria_1 = __importDefault(require("../controllers/Cevicheria"));
const Joi_1 = require("../middleware/Joi");
const router = express_1.default.Router();
/**
 * @swagger
 *
 * /cevicheria:
 *   post:
 *     summary: Crear una nueva cevichería
 *     description: Crea una nueva cevichería.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cevicheria'
 *     responses:
 *       201:
 *         description: Cevichería creada exitosamente.
 *       422:
 *         description: Datos de entrada no válidos.
 *
 *   get:
 *     summary: Obtener todas las cevicherías
 *     description: Obtiene una lista de todas las cevicherías.
 *     responses:
 *       200:
 *         description: Lista de cevicherías exitosamente obtenida.
 *       500:
 *         description: Error en el servidor.
 *
 * /cevicheria/{cevicheriaId}:
 *   get:
 *     summary: Obtener una cevichería por ID
 *     description: Obtiene una cevichería por su ID.
 *     parameters:
 *       - in: path
 *         name: cevicheriaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la cevichería a obtener.
 *     responses:
 *       200:
 *         description: Cevichería exitosamente obtenida.
 *       404:
 *         description: Cevichería no encontrada.
 *       500:
 *         description: Error en el servidor.
 *
 *   patch:
 *     summary: Actualizar una cevichería
 *     description: Actualiza una cevichería existente.
 *     parameters:
 *       - in: path
 *         name: cevicheriaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la cevichería a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cevicheria'
 *     responses:
 *       201:
 *         description: Cevichería actualizada exitosamente.
 *       404:
 *         description: Cevichería no encontrada.
 *       422:
 *         description: Datos de entrada no válidos.
 *       500:
 *         description: Error en el servidor.
 *
 *   delete:
 *     summary: Eliminar una cevichería
 *     description: Elimina una cevichería por su ID.
 *     parameters:
 *       - in: path
 *         name: cevicheriaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la cevichería a eliminar.
 *     responses:
 *       201:
 *         description: Cevichería eliminada exitosamente.
 *       404:
 *         description: Cevichería no encontrada.
 *       500:
 *         description: Error en el servidor.
 */
router.post('/', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.cevicheria.create), Cevicheria_1.default.createCevicheria);
router.get('/', Cevicheria_1.default.readAllCevicherias);
router.get('/:cevicheriaId', Cevicheria_1.default.readCevicheria);
router.patch('/:cevicheriaId', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.cevicheria.update), Cevicheria_1.default.updateCevicheria);
router.delete('/:cevicheriaId', Cevicheria_1.default.deleteCevicheria);
module.exports = router;
