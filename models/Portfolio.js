const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  currency: [
    {
      amount: {
        type: Number,
        required: true
      },
      currencyType: {
        type: String,
        required: true
      }
    }
  ],
  cryptoCurrency: [
    {
      amount: {
        type: Number,
        required: true
      },
      cryptoType: {
        type: String,
        required: true
      }
    }
  ],
  stock: [
    {
      amount: {
        type: Number,
        required: true
      },

      stockName: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Portfolio = mongoose.model("portfolios", PortfolioSchema);
