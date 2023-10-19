import mongoose, { Document, Schema } from 'mongoose';

export interface IEmpleado {
    nombre: string;
    cedula: string;
    telefono: string;
    experiencia: string;
    cevicheria: string;
}

export interface IEmpleadoModel extends IEmpleado, Document {}

const EmpleadoSchema: Schema = new Schema(
    {
        nombre: { type: String, required: true },
        cedula: { type: String, required: true },
        telefono: { type: String, required: true },
        experiencia: { type: String, required: true },
        cevicheria: { type: Schema.Types.ObjectId, required: true, ref: 'Cevicheria' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IEmpleadoModel>('Empleado', EmpleadoSchema);
