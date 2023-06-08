import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'

import router from './router.js'

const PORT = 5100

const DB_URL = 'mongodb+srv://user1:1234@cluster0.e4fkkr4.mongodb.net/?retryWrites=true&w=majority'

const app = express()
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload())
app.use('/api', router)

app.post('/', )

async function startApp () {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('-----WORK----'))
  } catch (e) {
    console.log('e', e)
  }

}

startApp()
