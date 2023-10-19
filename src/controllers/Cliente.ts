import { NextFunction, Request, Response } from 'express';
import Cliente from '../models/Cliente';

const createCliente = (req: Request, res: Response, next: NextFunction) => {
    const cliente = new Cliente({
        ...req.body
    });

    return cliente
        .save()
        .then((cliente) => res.status(201).json({ cliente }))
        .catch((error) => res.status(500).json({ error }));
};

const readCliente = (req: Request, res: Response, next: NextFunction) => {
    const clienteId = req.params.clienteId;

    return Cliente.findById(clienteId)
        .then((cliente) => (cliente ? res.status(200).json({ cliente }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllClientes = (req: Request, res: Response, next: NextFunction) => {
    return Cliente.find()
        .then((clientes) => res.status(200).json({ clientes }))
        .catch((error) => res.status(500).json({ error }));
};

const updateCliente = (req: Request, res: Response, next: NextFunction) => {
    const clienteId = req.params.clienteId;

    return Cliente.findById(clienteId)
        .then((cliente) => {
            if (cliente) {
                cliente.set(req.body);

                return cliente
                    .save()
                    .then((cliente) => res.status(201).json({ cliente }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteCliente = (req: Request, res: Response, next: NextFunction) => {
    const clienteId = req.params.clienteId;

    return Cliente.findByIdAndDelete(clienteId)
        .then((cliente) => (cliente ? res.status(201).json({ cliente, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createCliente, readCliente, readAllClientes, updateCliente, deleteCliente };
