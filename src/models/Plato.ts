import mongoose, { Document, Schema } from 'mongoose';

export interface IPlato {
    nombre: string;
    precio: string;
    cevicheria: string;
}

export interface IPlatoModel extends IPlato, Document {}

const PlatoSchema: Schema = new Schema(
    {
        nombre: { type: String, required: true },
        precio: { type: String, required: true },
        cevicheria: { type: Schema.Types.ObjectId, required: true, ref: 'Cevicheria' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IPlatoModel>('Plato', PlatoSchema);
