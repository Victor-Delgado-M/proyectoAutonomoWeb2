import { NextFunction, Request, Response } from 'express';
import Ciudad from '../models/Ciudad';

const createCiudad = (req: Request, res: Response, next: NextFunction) => {
    const ciudad = new Ciudad({
        ...req.body
    });

    return ciudad
        .save()
        .then((ciudad) => res.status(201).json({ ciudad }))
        .catch((error) => res.status(500).json({ error }));
};

const readCiudad = (req: Request, res: Response, next: NextFunction) => {
    const ciudadId = req.params.ciudadId;

    return Ciudad.findById(ciudadId)
        .then((ciudad) => (ciudad ? res.status(200).json({ ciudad }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllCiudades = (req: Request, res: Response, next: NextFunction) => {
    return Ciudad.find()
        .then((ciudades) => res.status(200).json({ ciudades }))
        .catch((error) => res.status(500).json({ error }));
};

const updateCiudad = (req: Request, res: Response, next: NextFunction) => {
    const ciudadId = req.params.ciudadId;

    return Ciudad.findById(ciudadId)
        .then((ciudad) => {
            if (ciudad) {
                ciudad.set(req.body);

                return ciudad
                    .save()
                    .then((ciudad) => res.status(201).json({ ciudad }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteCiudad = (req: Request, res: Response, next: NextFunction) => {
    const ciudadId = req.params.ciudadId;

    return Ciudad.findByIdAndDelete(ciudadId)
        .then((ciudad) => (ciudad ? res.status(201).json({ ciudad, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createCiudad, readCiudad, readAllCiudades, updateCiudad, deleteCiudad };
