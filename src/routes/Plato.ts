import express from 'express';
import controller from '../controllers/Plato';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

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


router.post('/', ValidateJoi(Schemas.plato.create), controller.createPlato);
router.get('/', controller.readAllPlatos);
router.get('/:platoId', controller.readPlato);
router.patch('/:platoId', ValidateJoi(Schemas.plato.update), controller.updatePlato);
router.delete('/:platoId', controller.deletePlato);

export = router;
