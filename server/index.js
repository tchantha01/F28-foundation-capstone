//Import
// require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
// const {SERVER_PORT} =process.env




//Middleware
app.use(express.json())
app.use(cors())


const {getGuest, addGuest, deleteGuest, updateGuest} = require('./controller')

app.get('/getGuest', getGuest)
app.post('/addGuest', addGuest)
app.delete('/deleteGuest/:id', deleteGuest)
app.put('/updateGuest/:id', updateGuest)


















app.listen(5678, () => console.log(`Running on port 5678`))
