import 'dotenv/config'

import express from 'express'

// routes
import routes from './routes'

// database
import './database'

const app = express()
app.use(express.json())
app.use(routes)

export default app
