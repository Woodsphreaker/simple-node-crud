import mongoose from 'mongoose'
import productSchema from '../schemas/productsSchema'

export default mongoose.model('Product', productSchema)
