"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Plato_1 = __importDefault(require("../controllers/Plato"));
const Joi_1 = require("../middleware/Joi");
const router = express_1.default.Router();
/**
 * @swagger
 * /plato:
 *   post:
 *     summary: Crear un nuevo plato
 *     description: Crea un nuevo plato.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Plato'
 *     responses:
 *       201:
 *         description: Plato creado exitosamente.
 *       422:
 *         description: Datos de entrada no válidos.
 *
 *   get:
 *     summary: Obtener todos los platos
 *     description: Obtiene una lista de todos los platos.
 *     responses:
 *       200:
 *         description: Lista de platos exitosamente obtenida.
 *       500:
 *         description: Error en el servidor.
 *
 * /plato/{platoId}:
 *   get:
 *     summary: Obtener un plato por ID
 *     description: Obtiene un plato por su ID.
 *     parameters:
 *       - in: path
 *         name: platoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del plato a obtener.
 *     responses:
 *       200:
 *         description: Plato exitosamente obtenido.
 *       404:
 *         description: Plato no encontrado.
 *       500:
 *         description: Error en el servidor.
 *
 *   patch:
 *     summary: Actualizar un plato
 *     description: Actualiza un plato existente.
 *     parameters:
 *       - in: path
 *         name: platoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del plato a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Plato'
 *     responses:
 *       201:
 *         description: Plato actualizado exitosamente.
 *       404:
 *         description: Plato no encontrado.
 *       422:
 *         description: Datos de entrada no válidos.
 *       500:
 *         description: Error en el servidor.
 *
 *   delete:
 *     summary: Eliminar un plato
 *     description: Elimina un plato por su ID.
 *     parameters:
 *       - in: path
 *         name: platoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del plato a eliminar.
 *     responses:
 *       201:
 *         description: Plato eliminado exitosamente.
 *       404:
 *         description: Plato no encontrado.
 *       500:
 *         description: Error en el servidor.
 */
router.post('/', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.plato.create), Plato_1.default.createPlato);
router.get('/', Plato_1.default.readAllPlatos);
router.get('/:platoId', Plato_1.default.readPlato);
router.patch('/:platoId', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.plato.update), Plato_1.default.updatePlato);
router.delete('/:platoId', Plato_1.default.deletePlato);
module.exports = router;
