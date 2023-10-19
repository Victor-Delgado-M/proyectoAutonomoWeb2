"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cevicheria_1 = __importDefault(require("../models/Cevicheria"));
const createCevicheria = (req, res, next) => {
    const cevicheria = new Cevicheria_1.default(Object.assign({}, req.body));
    return cevicheria
        .save()
        .then((cevicheria) => res.status(201).json({ cevicheria }))
        .catch((error) => res.status(500).json({ error }));
};
const readCevicheria = (req, res, next) => {
    const cevicheriaId = req.params.cevicheriaId;
    return Cevicheria_1.default.findById(cevicheriaId)
        .populate('sector')
        .then((cevicheria) => (cevicheria ? res.status(200).json({ cevicheria }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllCevicherias = (req, res, next) => {
    return Cevicheria_1.default.find()
        .then((cevicherias) => res.status(200).json({ cevicherias }))
        .catch((error) => res.status(500).json({ error }));
};
const updateCevicheria = (req, res, next) => {
    const cevicheriaId = req.params.cevicheriaId;
    return Cevicheria_1.default.findById(cevicheriaId)
        .then((cevicheria) => {
        if (cevicheria) {
            cevicheria.set(req.body);
            return cevicheria
                .save()
                .then((cevicheria) => res.status(201).json({ cevicheria }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteCevicheria = (req, res, next) => {
    const cevicheriaId = req.params.cevicheriaId;
    return Cevicheria_1.default.findByIdAndDelete(cevicheriaId)
        .then((cevicheria) => (cevicheria ? res.status(201).json({ cevicheria, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createCevicheria, readCevicheria, readAllCevicherias, updateCevicheria, deleteCevicheria };
