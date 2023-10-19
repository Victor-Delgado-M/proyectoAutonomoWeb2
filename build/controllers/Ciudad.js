"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ciudad_1 = __importDefault(require("../models/Ciudad"));
const createCiudad = (req, res, next) => {
    const ciudad = new Ciudad_1.default(Object.assign({}, req.body));
    return ciudad
        .save()
        .then((ciudad) => res.status(201).json({ ciudad }))
        .catch((error) => res.status(500).json({ error }));
};
const readCiudad = (req, res, next) => {
    const ciudadId = req.params.ciudadId;
    return Ciudad_1.default.findById(ciudadId)
        .then((ciudad) => (ciudad ? res.status(200).json({ ciudad }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllCiudades = (req, res, next) => {
    return Ciudad_1.default.find()
        .then((ciudades) => res.status(200).json({ ciudades }))
        .catch((error) => res.status(500).json({ error }));
};
const updateCiudad = (req, res, next) => {
    const ciudadId = req.params.ciudadId;
    return Ciudad_1.default.findById(ciudadId)
        .then((ciudad) => {
        if (ciudad) {
            ciudad.set(req.body);
            return ciudad
                .save()
                .then((ciudad) => res.status(201).json({ ciudad }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteCiudad = (req, res, next) => {
    const ciudadId = req.params.ciudadId;
    return Ciudad_1.default.findByIdAndDelete(ciudadId)
        .then((ciudad) => (ciudad ? res.status(201).json({ ciudad, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createCiudad, readCiudad, readAllCiudades, updateCiudad, deleteCiudad };
