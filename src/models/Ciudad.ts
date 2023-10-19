import mongoose, { Document, Schema } from 'mongoose';

export interface ICiudad {
    nombre: string;
}

export interface ICiudadModel extends ICiudad, Document {}

const CiudadSchema: Schema = new Schema(
    {
        nombre: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<ICiudadModel>('Ciudad', CiudadSchema);
