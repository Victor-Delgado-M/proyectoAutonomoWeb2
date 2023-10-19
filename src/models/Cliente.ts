import mongoose, { Document, Schema } from 'mongoose';

export interface ICliente {
    cedula: string;
    nombre: string;
    telefono: string;
    correo: string;
}

export interface IClienteModel extends ICliente, Document {}

const ClienteSchema: Schema = new Schema(
    {
        cedula: { type: String, required: true },
        nombre: { type: String, required: true },
        telefono: { type: String, required: true },
        correo: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IClienteModel>('Cliente', ClienteSchema);
