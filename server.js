const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/playlist', require('./src/routes/playlistRoute'))
app.use('/api/v1/song', require('./src/routes/songRoute'))

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})