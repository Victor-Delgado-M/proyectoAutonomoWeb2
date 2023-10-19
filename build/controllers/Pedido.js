"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pedido_1 = __importDefault(require("../models/Pedido"));
const createPedido = (req, res, next) => {
    const pedido = new Pedido_1.default(Object.assign({}, req.body));
    return pedido
        .save()
        .then((pedido) => res.status(201).json({ pedido }))
        .catch((error) => res.status(500).json({ error }));
};
const readPedido = (req, res, next) => {
    const pedidoId = req.params.pedidoId;
    return Pedido_1.default.findById(pedidoId)
        .populate('plato')
        .populate('cliente')
        .then((pedido) => (pedido ? res.status(200).json({ pedido }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllPedidos = (req, res, next) => {
    return Pedido_1.default.find()
        .then((pedidos) => res.status(200).json({ pedidos }))
        .catch((error) => res.status(500).json({ error }));
};
const updatePedido = (req, res, next) => {
    const pedidoId = req.params.pedidoId;
    return Pedido_1.default.findById(pedidoId)
        .then((pedido) => {
        if (pedido) {
            pedido.set(req.body);
            return pedido
                .save()
                .then((pedido) => res.status(201).json({ pedido }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deletePedido = (req, res, next) => {
    const pedidoId = req.params.pedidoId;
    return Pedido_1.default.findByIdAndDelete(pedidoId)
        .then((pedido) => (pedido ? res.status(201).json({ pedido, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createPedido, readPedido, readAllPedidos, updatePedido, deletePedido };
