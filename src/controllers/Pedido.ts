import { NextFunction, Request, Response } from 'express';
import Pedido from '../models/Pedido';

const createPedido = (req: Request, res: Response, next: NextFunction) => {
    const pedido = new Pedido({
        ...req.body
    });

    return pedido
        .save()
        .then((pedido) => res.status(201).json({ pedido }))
        .catch((error) => res.status(500).json({ error }));
};

const readPedido = (req: Request, res: Response, next: NextFunction) => {
    const pedidoId = req.params.pedidoId;

    return Pedido.findById(pedidoId)
        .populate('plato')
        .populate('cliente')
        .then((pedido) => (pedido ? res.status(200).json({ pedido }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllPedidos = (req: Request, res: Response, next: NextFunction) => {
    return Pedido.find()
        .then((pedidos) => res.status(200).json({ pedidos }))
        .catch((error) => res.status(500).json({ error }));
};

const updatePedido = (req: Request, res: Response, next: NextFunction) => {
    const pedidoId = req.params.pedidoId;

    return Pedido.findById(pedidoId)
        .then((pedido) => {
            if (pedido) {
                pedido.set(req.body);

                return pedido
                    .save()
                    .then((pedido) => res.status(201).json({ pedido }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deletePedido = (req: Request, res: Response, next: NextFunction) => {
    const pedidoId = req.params.pedidoId;

    return Pedido.findByIdAndDelete(pedidoId)
        .then((pedido) => (pedido ? res.status(201).json({ pedido, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createPedido, readPedido, readAllPedidos, updatePedido, deletePedido };
