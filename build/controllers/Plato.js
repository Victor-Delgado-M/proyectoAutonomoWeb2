"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Plato_1 = __importDefault(require("../models/Plato"));
const createPlato = (req, res, next) => {
    const plato = new Plato_1.default(Object.assign({}, req.body));
    return plato
        .save()
        .then((plato) => res.status(201).json({ plato }))
        .catch((error) => res.status(500).json({ error }));
};
const readPlato = (req, res, next) => {
    const platoId = req.params.platoId;
    return Plato_1.default.findById(platoId)
        .populate('cevicheria')
        .then((plato) => (plato ? res.status(200).json({ plato }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllPlatos = (req, res, next) => {
    return Plato_1.default.find()
        .then((platos) => res.status(200).json({ platos }))
        .catch((error) => res.status(500).json({ error }));
};
const updatePlato = (req, res, next) => {
    const platoId = req.params.platoId;
    return Plato_1.default.findById(platoId)
        .then((plato) => {
        if (plato) {
            plato.set(req.body);
            return plato
                .save()
                .then((plato) => res.status(201).json({ plato }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deletePlato = (req, res, next) => {
    const platoId = req.params.platoId;
    return Plato_1.default.findByIdAndDelete(platoId)
        .then((plato) => (plato ? res.status(201).json({ plato, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createPlato, readPlato, readAllPlatos, updatePlato, deletePlato };
