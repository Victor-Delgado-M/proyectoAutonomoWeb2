import { NextFunction, Request, Response } from 'express';
import Plato from '../models/Plato';

const createPlato = (req: Request, res: Response, next: NextFunction) => {
    const plato = new Plato({
        ...req.body
    });

    return plato
        .save()
        .then((plato) => res.status(201).json({ plato }))
        .catch((error) => res.status(500).json({ error }));
};

const readPlato = (req: Request, res: Response, next: NextFunction) => {
    const platoId = req.params.platoId;

    return Plato.findById(platoId)
        .populate('cevicheria')
        .then((plato) => (plato ? res.status(200).json({ plato }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllPlatos = (req: Request, res: Response, next: NextFunction) => {
    return Plato.find()
        .then((platos) => res.status(200).json({ platos }))
        .catch((error) => res.status(500).json({ error }));
};

const updatePlato = (req: Request, res: Response, next: NextFunction) => {
    const platoId = req.params.platoId;

    return Plato.findById(platoId)
        .then((plato) => {
            if (plato) {
                plato.set(req.body);

                return plato
                    .save()
                    .then((plato) => res.status(201).json({ plato }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deletePlato = (req: Request, res: Response, next: NextFunction) => {
    const platoId = req.params.platoId;

    return Plato.findByIdAndDelete(platoId)
        .then((plato) => (plato ? res.status(201).json({ plato, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createPlato, readPlato, readAllPlatos, updatePlato, deletePlato };
