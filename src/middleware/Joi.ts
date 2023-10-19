import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { ICiudad } from '../models/Ciudad';
import { ISector } from '../models/Sector';
import { ICevicheria } from '../models/Cevicheria';
import { IEmpleado } from '../models/Empleado';
import { ICliente } from '../models/Cliente';
import { IPlato} from '../models/Plato';
import { IPedido } from '../models/Pedido';
import Logging from '../library/Logging';

export const ValidateJoi = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            Logging.error(error);

            return res.status(422).json({ error });
        }
    };
};

export const Schemas = {
    ciudad: {
        create: Joi.object<ICiudad>({
            nombre: Joi.string().required()
        }),
        update: Joi.object<ICiudad>({
            nombre: Joi.string().required()
        })
    },
    cliente: {
        create: Joi.object<ICliente>({
            cedula: Joi.string().required(),
            nombre: Joi.string().required(),
            telefono: Joi.string().required(),
            correo: Joi.string().required()
        }),
        update: Joi.object<ICliente>({
            cedula: Joi.string().required(),
            nombre: Joi.string().required(),
            telefono: Joi.string().required(),
            correo: Joi.string().required()
        })
    },
    empleado: {
        create: Joi.object<IEmpleado>({
            nombre: Joi.string().required(),
            cedula: Joi.string().required(),
            telefono: Joi.string().required(),
            experiencia: Joi.string().required(),
            cevicheria: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        }),
        update: Joi.object<IEmpleado>({
            nombre: Joi.string().required(),
            cedula: Joi.string().required(),
            telefono: Joi.string().required(),
            experiencia: Joi.string().required(),
            cevicheria: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        })
    },
    cevicheria: {
        create: Joi.object<ICevicheria>({
            nombre: Joi.string().required(),
            direccion: Joi.string().required(),
            ruc: Joi.string().required(),
            slogan: Joi.string().required(),
            horario: Joi.string().required(),
            sector: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        }),
        update: Joi.object<ICevicheria>({
            nombre: Joi.string().required(),
            direccion: Joi.string().required(),
            ruc: Joi.string().required(),
            slogan: Joi.string().required(),
            horario: Joi.string().required(),
            sector: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        })
    },
    sector: {
        create: Joi.object<ISector>({
            direccion: Joi.string().required(),
            author: Joi.string().required()
        }),
        update: Joi.object<ISector>({
            direccion: Joi.string().required(),
            author: Joi.string().required()
        })
    },
    plato: {
        create: Joi.object<IPlato>({
            nombre: Joi.string().required(),
            precio: Joi.string().required(),
            cevicheria: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        }),
        update: Joi.object<IPlato>({
            nombre: Joi.string().required(),
            precio: Joi.string().required(),
            cevicheria: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        })
    },
    pedido: {
        create: Joi.object<IPedido>({
            detallesorden: Joi.string().required(),
            fecha: Joi.string().required(),
            hora: Joi.string().required(),
            observacion: Joi.string().required(),
            plato: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            cliente: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        }),
        update: Joi.object<IPedido>({
            detallesorden: Joi.string().required(),
            fecha: Joi.string().required(),
            hora: Joi.string().required(),
            observacion: Joi.string().required(),
            plato: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            cliente: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        })
    }
};
