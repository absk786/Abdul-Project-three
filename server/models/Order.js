const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    purchaseDate: {
      type: Date,
      default: Date.now
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  });

  const Oder = mongoose.model('Order', orderSchema)
  module.exports = Oder;