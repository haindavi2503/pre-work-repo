const mongoose = require('mongoose');

const addressSchema = {
  street: String,
  city: String,
  state: String,
  zipCode: String,
  country: String,
};

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    passwordHash: { type: String, required: true },
    addresses: [addressSchema],
    orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    role: {
      type: String,
      enum: ['customer', 'admin', 'seller'],
      default: 'customer',
    },
    lastLogin: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
