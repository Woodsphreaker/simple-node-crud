import mongoose from 'mongoose'

const productsSchema = new mongoose.Schema({
  prodID: Number,
  name: String,
  weigth: Number
})

export default productsSchema
