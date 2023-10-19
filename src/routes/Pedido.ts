import express from 'express';
import controller from '../controllers/Pedido';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

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

router.post('/', ValidateJoi(Schemas.pedido.create), controller.createPedido);
router.get('/', controller.readAllPedidos);
router.get('/:pedidoId', controller.readPedido);
router.patch('/:pedidoId', ValidateJoi(Schemas.pedido.update), controller.updatePedido);
router.delete('/:pedidoId', controller.deletePedido);

export = router;
