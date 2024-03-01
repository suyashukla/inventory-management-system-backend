import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    batchNumber: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: String,
      required: true,
    },
    stocks: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model('Product', productSchema);
