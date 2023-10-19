"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Empleado_1 = __importDefault(require("../models/Empleado"));
const createEmpleado = (req, res, next) => {
    const empleado = new Empleado_1.default(Object.assign({}, req.body));
    return empleado
        .save()
        .then((empleado) => res.status(201).json({ empleado }))
        .catch((error) => res.status(500).json({ error }));
};
const readEmpleado = (req, res, next) => {
    const empleadoId = req.params.empleadoId;
    return Empleado_1.default.findById(empleadoId)
        .populate('cevicheria')
        .then((empleado) => (empleado ? res.status(200).json({ empleado }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllEmpleados = (req, res, next) => {
    return Empleado_1.default.find()
        .then((empleados) => res.status(200).json({ empleados }))
        .catch((error) => res.status(500).json({ error }));
};
const updateEmpleado = (req, res, next) => {
    const empleadoId = req.params.empleadoId;
    return Empleado_1.default.findById(empleadoId)
        .then((empleado) => {
        if (empleado) {
            empleado.set(req.body);
            return empleado
                .save()
                .then((empleado) => res.status(201).json({ empleado }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteEmpleado = (req, res, next) => {
    const empleadoId = req.params.empleadoId;
    return Empleado_1.default.findByIdAndDelete(empleadoId)
        .then((empleado) => (empleado ? res.status(201).json({ empleado, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createEmpleado, readEmpleado, readAllEmpleados, updateEmpleado, deleteEmpleado };
