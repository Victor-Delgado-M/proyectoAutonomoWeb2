"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Sector_1 = __importDefault(require("../controllers/Sector"));
const Joi_1 = require("../middleware/Joi");
const router = express_1.default.Router();
/**
 * @swagger
 *
 * /sector:
 *   post:
 *     summary: Crear un nuevo sector
 *     description: Crea un nuevo sector.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sector'
 *     responses:
 *       201:
 *         description: Sector creado exitosamente.
 *       422:
 *         description: Datos de entrada no válidos.
 *
 *   get:
 *     summary: Obtener todos los sectores
 *     description: Obtiene una lista de todos los sectores.
 *     responses:
 *       200:
 *         description: Lista de sectores exitosamente obtenida.
 *       500:
 *         description: Error en el servidor.
 *
 * /sector/{sectorId}:
 *   get:
 *     summary: Obtener un sector por ID
 *     description: Obtiene un sector por su ID.
 *     parameters:
 *       - in: path
 *         name: sectorId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del sector a obtener.
 *     responses:
 *       200:
 *         description: Sector exitosamente obtenido.
 *       404:
 *         description: Sector no encontrado.
 *       500:
 *         description: Error en el servidor.
 *
 *   patch:
 *     summary: Actualizar un sector
 *     description: Actualiza un sector existente.
 *     parameters:
 *       - in: path
 *         name: sectorId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del sector a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sector'
 *     responses:
 *       201:
 *         description: Sector actualizado exitosamente.
 *       404:
 *         description: Sector no encontrado.
 *       422:
 *         description: Datos de entrada no válidos.
 *       500:
 *         description: Error en el servidor.
 *
 *   delete:
 *     summary: Eliminar un sector
 *     description: Elimina un sector por su ID.
 *     parameters:
 *       - in: path
 *         name: sectorId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del sector a eliminar.
 *     responses:
 *       201:
 *         description: Sector eliminado exitosamente.
 *       404:
 *         description: Sector no encontrado.
 *       500:
 *         description: Error en el servidor.
 */
router.post('/', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.sector.create), Sector_1.default.createSector);
router.get('/', Sector_1.default.readAllSectores);
router.get('/:sectorId', Sector_1.default.readSector);
router.patch('/:sectorId', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.sector.update), Sector_1.default.updateSector);
router.delete('/:sectorId', Sector_1.default.deleteSector);
module.exports = router;
