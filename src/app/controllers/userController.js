import User from '../models/userModel'

const index = async (req, res) => {
  const users = await User.find()
  res.json(users)
}
const show = async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)

  if (!user) {
    return res.status(400).json({ message: 'user not found' })
  }

  return res.json(user)
}
const create = async (req, res) => {
  const { name, age } = req.body

  const user = await User.findOne({ name })

  if (user) {
    return res.status(400).json({ message: 'user already existis' })
  }

  const newUser = await User.create({
    name,
    age
  })

  res.json(newUser)
}
const update = async (req, res) => {
  const { id, name, age } = req.body

  const user = await User.findById(id)

  if (!user) {
    return res.status(400).json({ message: 'user not found' })
  }

  const newUser = await User.updateOne(
    {
      name,
      age
    },
    {
      upsert: true
    }
  )

  res.json(newUser)
}
const destroy = async (req, res) => {
  const { id } = req.params

  const user = User.findById(id)

  if (!user) {
    return res.status(400).json({ message: 'user not found' })
  }

  await User.deleteOne({ _id: id })

  res.json({ message: 'user removed' })
}

export default {
  index,
  show,
  create,
  update,
  destroy
}
