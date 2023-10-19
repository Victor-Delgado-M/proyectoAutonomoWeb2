import express from 'express';
import controller from '../controllers/Cliente';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();
/**
 * @swagger
 * /cliente:
 *   post:
 *     summary: Crear un nuevo cliente
 *     description: Crea un nuevo cliente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente.
 *       422:
 *         description: Datos de entrada no válidos.
 *
 *   get:
 *     summary: Obtener todos los clientes
 *     description: Obtiene una lista de todos los clientes.
 *     responses:
 *       200:
 *         description: Lista de clientes exitosamente obtenida.
 *       500:
 *         description: Error en el servidor.
 *
 * /cliente/{clienteId}:
 *   get:
 *     summary: Obtener un cliente por ID
 *     description: Obtiene un cliente por su ID.
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente a obtener.
 *     responses:
 *       200:
 *         description: Cliente exitosamente obtenido.
 *       404:
 *         description: Cliente no encontrado.
 *       500:
 *         description: Error en el servidor.
 *
 *   patch:
 *     summary: Actualizar un cliente
 *     description: Actualiza un cliente existente.
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       201:
 *         description: Cliente actualizado exitosamente.
 *       404:
 *         description: Cliente no encontrado.
 *       422:
 *         description: Datos de entrada no válidos.
 *       500:
 *         description: Error en el servidor.
 *
 *   delete:
 *     summary: Eliminar un cliente
 *     description: Elimina un cliente por su ID.
 *     parameters:
 *       - in: path
 *         name: clienteId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente a eliminar.
 *     responses:
 *       201:
 *         description: Cliente eliminado exitosamente.
 *       404:
 *         description: Cliente no encontrado.
 *       500:
 *         description: Error en el servidor.
 */

router.post('/', ValidateJoi(Schemas.cliente.create), controller.createCliente);
router.get('/', controller.readAllClientes);
router.get('/:clienteId', controller.readCliente);
router.patch('/:clienteId', ValidateJoi(Schemas.cliente.update), controller.updateCliente);
router.delete('/:clienteId', controller.deleteCliente);

export = router;
