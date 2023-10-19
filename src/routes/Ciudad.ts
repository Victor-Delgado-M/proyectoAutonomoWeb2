import express from 'express';
import controller from '../controllers/Ciudad'; // Importa el controlador adecuado
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

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
router.post('/', ValidateJoi(Schemas.ciudad.create), controller.createCiudad);
router.get('/', controller.readAllCiudades);
router.get('/:ciudadId', controller.readCiudad);
router.patch('/:ciudadId', ValidateJoi(Schemas.ciudad.update), controller.updateCiudad);
router.delete('/:ciudadId', controller.deleteCiudad);

export = router;
