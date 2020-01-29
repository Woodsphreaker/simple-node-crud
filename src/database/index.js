import mongoose from 'mongoose'
import { mongodb } from '../config/mongoDB'

const mongo = () => {
  mongoose.connect(mongodb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
}

const stardb = databases => {
  for (const db of databases) {
    db()
  }
}

export default stardb([mongo])
