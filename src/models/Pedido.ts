import mongoose, { Document, Schema } from 'mongoose';

export interface IPedido {
    detallesorden: string;
    fecha: string;
    hora: string;
    observacion: string;
    plato: string;
    cliente: string;
}

export interface IPedidoModel extends IPedido, Document {}

const PedidoSchema: Schema = new Schema(
    {
        direccion: { type: String, required: true },
        fecha: { type: String, required: true },
        hora: { type: String, required: true },
        observacion: { type: String, required: true },
        plato: { type: Schema.Types.ObjectId, required: true, ref: 'Plato' },
        cliente: { type: Schema.Types.ObjectId, required: true, ref: 'Cliente' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IPedidoModel>('Pedido', PedidoSchema);
