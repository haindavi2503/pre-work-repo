const mongoose = require('mongoose');

const reviewSchema = {
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now },
};

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: String,
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    stockQuantity: { type: Number, required: true, min: 0 },
    imageUrl: String,
    brand: String,
    tags: [String],
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
