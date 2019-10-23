const express = require('express')
const app = express()
const formidable = require('formidable')

app.post('/upload', (req, res) => {
  const file = new formidable.IncomingForm()

  file.uploadDir = 'incoming'

  file.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err)
      res.send({ recieved: false, error: err })
      throw err
    }

    for (const file of Object.entries(files)) {
      // console.log(file)
    }

    res.send({ recieved: true })
  })
})

module.exports = {
  path: '/',
  handler: app
}
