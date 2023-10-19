"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Empleado_1 = __importDefault(require("../controllers/Empleado"));
const Joi_1 = require("../middleware/Joi");
const router = express_1.default.Router();
/**
 * @swagger
 * /empleado:
 *   post:
 *     summary: Crear un nuevo empleado
 *     description: Crea un nuevo empleado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       201:
 *         description: Empleado creado exitosamente.
 *       422:
 *         description: Datos de entrada no válidos.
 *
 *   get:
 *     summary: Obtener todos los empleados
 *     description: Obtiene una lista de todos los empleados.
 *     responses:
 *       200:
 *         description: Lista de empleados exitosamente obtenida.
 *       500:
 *         description: Error en el servidor.
 *
 * /empleado/{empleadoId}:
 *   get:
 *     summary: Obtener un empleado por ID
 *     description: Obtiene un empleado por su ID.
 *     parameters:
 *       - in: path
 *         name: empleadoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del empleado a obtener.
 *     responses:
 *       200:
 *         description: Empleado exitosamente obtenido.
 *       404:
 *         description: Empleado no encontrado.
 *       500:
 *         description: Error en el servidor.
 *
 *   patch:
 *     summary: Actualizar un empleado
 *     description: Actualiza un empleado existente.
 *     parameters:
 *       - in: path
 *         name: empleadoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del empleado a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       201:
 *         description: Empleado actualizado exitosamente.
 *       404:
 *         description: Empleado no encontrado.
 *       422:
 *         description: Datos de entrada no válidos.
 *       500:
 *         description: Error en el servidor.
 *
 *   delete:
 *     summary: Eliminar un empleado
 *     description: Elimina un empleado por su ID.
 *     parameters:
 *       - in: path
 *         name: empleadoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del empleado a eliminar.
 *     responses:
 *       201:
 *         description: Empleado eliminado exitosamente.
 *       404:
 *         description: Empleado no encontrado.
 *       500:
 *         description: Error en el servidor.
 */
router.post('/', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.empleado.create), Empleado_1.default.createEmpleado);
router.get('/', Empleado_1.default.readAllEmpleados);
router.get('/:empleadoId', Empleado_1.default.readEmpleado);
router.patch('/:empleadoId', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.empleado.update), Empleado_1.default.updateEmpleado);
router.delete('/:empleadoId', Empleado_1.default.deleteEmpleado);
module.exports = router;
