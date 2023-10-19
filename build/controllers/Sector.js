"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sector_1 = __importDefault(require("../models/Sector"));
const createSector = (req, res, next) => {
    const sector = new Sector_1.default(Object.assign({}, req.body));
    return sector
        .save()
        .then((sector) => res.status(201).json({ sector }))
        .catch((error) => res.status(500).json({ error }));
};
const readSector = (req, res, next) => {
    const sectorId = req.params.sectorId;
    return Sector_1.default.findById(sectorId)
        .populate('ciudad')
        .then((sector) => (sector ? res.status(200).json({ sector }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllSectores = (req, res, next) => {
    return Sector_1.default.find()
        .then((sectores) => res.status(200).json({ sectores }))
        .catch((error) => res.status(500).json({ error }));
};
const updateSector = (req, res, next) => {
    const sectorId = req.params.sectorId;
    return Sector_1.default.findById(sectorId)
        .then((sector) => {
        if (sector) {
            sector.set(req.body);
            return sector
                .save()
                .then((sector) => res.status(201).json({ sector }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteSector = (req, res, next) => {
    const sectorId = req.params.sectorId;
    return Sector_1.default.findByIdAndDelete(sectorId)
        .then((sector) => (sector ? res.status(201).json({ sector, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createSector, readSector, readAllSectores, updateSector, deleteSector };
