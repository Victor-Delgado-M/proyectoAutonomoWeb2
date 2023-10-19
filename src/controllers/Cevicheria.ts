import { NextFunction, Request, Response } from 'express';
import Cevicheria from '../models/Cevicheria';

const createCevicheria = (req: Request, res: Response, next: NextFunction) => {
    const cevicheria = new Cevicheria({
        ...req.body
    });

    return cevicheria
        .save()
        .then((cevicheria) => res.status(201).json({ cevicheria }))
        .catch((error) => res.status(500).json({ error }));
};

const readCevicheria = (req: Request, res: Response, next: NextFunction) => {
    const cevicheriaId = req.params.cevicheriaId;

    return Cevicheria.findById(cevicheriaId)
        .populate('sector')
        .then((cevicheria) => (cevicheria ? res.status(200).json({ cevicheria }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllCevicherias = (req: Request, res: Response, next: NextFunction) => {
    return Cevicheria.find()
        .then((cevicherias) => res.status(200).json({ cevicherias }))
        .catch((error) => res.status(500).json({ error }));
};

const updateCevicheria = (req: Request, res: Response, next: NextFunction) => {
    const cevicheriaId = req.params.cevicheriaId;

    return Cevicheria.findById(cevicheriaId)
        .then((cevicheria) => {
            if (cevicheria) {
                cevicheria.set(req.body);

                return cevicheria
                    .save()
                    .then((cevicheria) => res.status(201).json({ cevicheria }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteCevicheria = (req: Request, res: Response, next: NextFunction) => {
    const cevicheriaId = req.params.cevicheriaId;

    return Cevicheria.findByIdAndDelete(cevicheriaId)
        .then((cevicheria) => (cevicheria ? res.status(201).json({ cevicheria, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createCevicheria, readCevicheria, readAllCevicherias, updateCevicheria, deleteCevicheria };
