import { NextFunction, Request, Response } from 'express';
import Empleado from '../models/Empleado';

const createEmpleado = (req: Request, res: Response, next: NextFunction) => {
    const empleado = new Empleado({
        ...req.body
    });

    return empleado
        .save()
        .then((empleado) => res.status(201).json({ empleado }))
        .catch((error) => res.status(500).json({ error }));
};

const readEmpleado = (req: Request, res: Response, next: NextFunction) => {
    const empleadoId = req.params.empleadoId;

    return Empleado.findById(empleadoId)
        .populate('cevicheria')
        .then((empleado) => (empleado ? res.status(200).json({ empleado }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllEmpleados = (req: Request, res: Response, next: NextFunction) => {
    return Empleado.find()
        .then((empleados) => res.status(200).json({ empleados }))
        .catch((error) => res.status(500).json({ error }));
};

const updateEmpleado = (req: Request, res: Response, next: NextFunction) => {
    const empleadoId = req.params.empleadoId;

    return Empleado.findById(empleadoId)
        .then((empleado) => {
            if (empleado) {
                empleado.set(req.body);

                return empleado
                    .save()
                    .then((empleado) => res.status(201).json({ empleado }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteEmpleado = (req: Request, res: Response, next: NextFunction) => {
    const empleadoId = req.params.empleadoId;

    return Empleado.findByIdAndDelete(empleadoId)
        .then((empleado) => (empleado ? res.status(201).json({ empleado, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createEmpleado, readEmpleado, readAllEmpleados, updateEmpleado, deleteEmpleado };
