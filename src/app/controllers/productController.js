import Product from '../models/productModel'

const index = async (req, res) => {
  const product = await Product.find()
  return res.json(product)
}
const show = async (req, res) => {
  const { id } = req.params

  const product = await Product.findById(id)

  if (!product) {
    return res.status(500).json({ message: 'Product not found' })
  }

  return res.json(product)
}
const create = async (req, res) => {
  const { prodID, name, weigth } = req.body

  const product = await Product.findOne({ prodID })

  if (product) {
    return res.status(400).json({ message: 'Product already registred' })
  }

  const newProduct = await Product.create({
    prodID,
    name,
    weigth
  })

  return res.json(newProduct)
}
const update = async (req, res) => {
  const { id } = req.params
  const { prodID, name, weigth } = req.body

  const product = await Product.findById(id)

  if (!product) {
    return res.status(500).json({ message: 'Product not found' })
  }

  await product.updateOne({
    prodID,
    name,
    weigth
  })

  return res.json({ message: 'Product updated' })
}
const destroy = async (req, res) => {
  const { id } = req.params

  const product = await Product.findById(id)

  if (!product) {
    return res.status(400).json({ message: 'Product not found' })
  }

  await Product.deleteOne({ _id: id })

  return res.json({ message: 'Product removed' })
}

export default { index, show, create, update, destroy }
