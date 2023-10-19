import express from 'express';
import controller from '../controllers/Empleado';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();


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

router.post('/', ValidateJoi(Schemas.empleado.create), controller.createEmpleado);
router.get('/', controller.readAllEmpleados);
router.get('/:empleadoId', controller.readEmpleado);
router.patch('/:empleadoId', ValidateJoi(Schemas.empleado.update), controller.updateEmpleado);
router.delete('/:empleadoId', controller.deleteEmpleado);

export = router;
