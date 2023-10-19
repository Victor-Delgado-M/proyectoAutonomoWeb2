"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("../models/Cliente"));
const createCliente = (req, res, next) => {
    const cliente = new Cliente_1.default(Object.assign({}, req.body));
    return cliente
        .save()
        .then((cliente) => res.status(201).json({ cliente }))
        .catch((error) => res.status(500).json({ error }));
};
const readCliente = (req, res, next) => {
    const clienteId = req.params.clienteId;
    return Cliente_1.default.findById(clienteId)
        .then((cliente) => (cliente ? res.status(200).json({ cliente }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllClientes = (req, res, next) => {
    return Cliente_1.default.find()
        .then((clientes) => res.status(200).json({ clientes }))
        .catch((error) => res.status(500).json({ error }));
};
const updateCliente = (req, res, next) => {
    const clienteId = req.params.clienteId;
    return Cliente_1.default.findById(clienteId)
        .then((cliente) => {
        if (cliente) {
            cliente.set(req.body);
            return cliente
                .save()
                .then((cliente) => res.status(201).json({ cliente }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteCliente = (req, res, next) => {
    const clienteId = req.params.clienteId;
    return Cliente_1.default.findByIdAndDelete(clienteId)
        .then((cliente) => (cliente ? res.status(201).json({ cliente, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createCliente, readCliente, readAllClientes, updateCliente, deleteCliente };
