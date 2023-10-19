"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Cliente_1 = __importDefault(require("../controllers/Cliente"));
const Joi_1 = require("../middleware/Joi");
const router = express_1.default.Router();
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
router.post('/', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.cliente.create), Cliente_1.default.createCliente);
router.get('/', Cliente_1.default.readAllClientes);
router.get('/:clienteId', Cliente_1.default.readCliente);
router.patch('/:clienteId', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.cliente.update), Cliente_1.default.updateCliente);
router.delete('/:clienteId', Cliente_1.default.deleteCliente);
module.exports = router;
