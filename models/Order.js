const mongoose = require('mongoose');

const itemSchema = {
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: { type: Number, required: true, min: 1 },
  priceAtOrder: { type: Number, required: true, min: 0 },
};

const addressSchema = {
  street: String,
  city: String,
  state: String,
  zipCode: String,
  country: String,
};

const paymentSchema = {
  method: String,
  transactionId: String,
  status: String,
};

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderDate: { type: Date, default: Date.now },
    totalAmount: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ['pending', 'processed', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    items: [itemSchema],
    shippingAddress: addressSchema,
    shippingMethod: String,
    trackingNumber: String,
    paymentDetails: paymentSchema,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
