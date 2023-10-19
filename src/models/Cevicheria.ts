import mongoose, { Document, Schema } from 'mongoose';

export interface ICevicheria {
    nombre: string;
    direccion: string;
    ruc: string;
    slogan: string;
    horario: string;
    sector: string;
}

export interface ICevicheriaModel extends ICevicheria, Document {}

const CevicheriaSchema: Schema = new Schema(
    {
        nombre: { type: String, required: true },
        direccion: { type: String, required: true },
        ruc: { type: String, required: true },
        slogan: { type: String, required: true },
        horario: { type: String, required: true },
        sector: { type: Schema.Types.ObjectId, required: true, ref: 'Sector' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<ICevicheriaModel>('Cevicheria', CevicheriaSchema);
