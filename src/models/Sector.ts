import mongoose, { Document, Schema } from 'mongoose';

export interface ISector {
    direccion: string;
    author: string;
}

export interface ISectorModel extends ISector, Document {}

const SectorSchema: Schema = new Schema(
    {
        direccion: { type: String, required: true },
        ciudad: { type: Schema.Types.ObjectId, required: true, ref: 'Ciudad' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<ISectorModel>('Sector', SectorSchema);
