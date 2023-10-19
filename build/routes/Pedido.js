"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Pedido_1 = __importDefault(require("../controllers/Pedido"));
const Joi_1 = require("../middleware/Joi");
const router = express_1.default.Router();
/**
 * @swagger
 * /pedido:
 *   post:
 *     summary: Crear un nuevo pedido
 *     description: Crea un nuevo pedido.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       201:
 *         description: Pedido creado exitosamente.
 *       422:
 *         description: Datos de entrada no válidos.
 *
 *   get:
 *     summary: Obtener todos los pedidos
 *     description: Obtiene una lista de todos los pedidos.
 *     responses:
 *       200:
 *         description: Lista de pedidos exitosamente obtenida.
 *       500:
 *         description: Error en el servidor.
 *
 * /pedido/{pedidoId}:
 *   get:
 *     summary: Obtener un pedido por ID
 *     description: Obtiene un pedido por su ID.
 *     parameters:
 *       - in: path
 *         name: pedidoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pedido a obtener.
 *     responses:
 *       200:
 *         description: Pedido exitosamente obtenido.
 *       404:
 *         description: Pedido no encontrado.
 *       500:
 *         description: Error en el servidor.
 *
 *   patch:
 *     summary: Actualizar un pedido
 *     description: Actualiza un pedido existente.
 *     parameters:
 *       - in: path
 *         name: pedidoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pedido a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       201:
 *         description: Pedido actualizado exitosamente.
 *       404:
 *         description: Pedido no encontrado.
 *       422:
 *         description: Datos de entrada no válidos.
 *       500:
 *         description: Error en el servidor.
 *
 *   delete:
 *     summary: Eliminar un pedido
 *     description: Elimina un pedido por su ID.
 *     parameters:
 *       - in: path
 *         name: pedidoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pedido a eliminar.
 *     responses:
 *       201:
 *         description: Pedido eliminado exitosamente.
 *       404:
 *         description: Pedido no encontrado.
 *       500:
 *         description: Error en el servidor.
 */
router.post('/', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.pedido.create), Pedido_1.default.createPedido);
router.get('/', Pedido_1.default.readAllPedidos);
router.get('/:pedidoId', Pedido_1.default.readPedido);
router.patch('/:pedidoId', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.pedido.update), Pedido_1.default.updatePedido);
router.delete('/:pedidoId', Pedido_1.default.deletePedido);
module.exports = router;
