import { NextFunction, Request, Response } from 'express';
import Sector from '../models/Sector';

const createSector = (req: Request, res: Response, next: NextFunction) => {
    const sector = new Sector({
        ...req.body
    });

    return sector
        .save()
        .then((sector) => res.status(201).json({ sector }))
        .catch((error) => res.status(500).json({ error }));
};

const readSector = (req: Request, res: Response, next: NextFunction) => {
    const sectorId = req.params.sectorId;

    return Sector.findById(sectorId)
        .populate('ciudad')
        .then((sector) => (sector ? res.status(200).json({ sector }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllSectores = (req: Request, res: Response, next: NextFunction) => {
    return Sector.find()
        .then((sectores) => res.status(200).json({ sectores }))
        .catch((error) => res.status(500).json({ error }));
};

const updateSector = (req: Request, res: Response, next: NextFunction) => {
    const sectorId = req.params.sectorId;

    return Sector.findById(sectorId)
        .then((sector) => {
            if (sector) {
                sector.set(req.body);

                return sector
                    .save()
                    .then((sector) => res.status(201).json({ sector }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteSector = (req: Request, res: Response, next: NextFunction) => {
    const sectorId = req.params.sectorId;

    return Sector.findByIdAndDelete(sectorId)
        .then((sector) => (sector ? res.status(201).json({ sector, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createSector, readSector, readAllSectores, updateSector, deleteSector };
