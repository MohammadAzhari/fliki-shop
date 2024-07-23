import mongoose, { Document, Schema } from "mongoose";
import { IProduct } from "./Product";

// Define the Order interface
export interface IOrder extends Document {
  products: {
    product: IProduct["_id"];
    quantity: number;
  }[];
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

// Define the Order schema
const OrderSchema: Schema = new Schema(
  {
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IOrder>("Order", OrderSchema);
