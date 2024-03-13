const { Schema, model, modelNames } = require("mongoose");

const shoeSchema = new Schema({
    name: {type: String},
    model: {type: String},
    img: {type: String},
    size: {type: String},
    inStock: {type: Boolean}
  },
  {
    timestamps: true,
  }
)

const Shoe = model ("Shoe", shoeSchema)
module.exports = Shoe;