//Import

const express = require('express')
const cors = require('cors')

const app = express()




//Middleware
app.use(express.json())
app.use(cors())


const {getGuest, addGuest, deleteGuest, updateGuest} = require('./controller')
const {getPlayer, addPlayer, deletePlayer} = require('./controller')

app.get('/getGuest', getGuest)
app.post('/addGuest', addGuest)
app.delete('/deleteGuest/:id', deleteGuest)
app.put('/updateGuest/:name', updateGuest)

app.get('/getPlayer', getPlayer)
app.post('/addPlayer', addPlayer)
app.delete('/deletePlayer/:id', deletePlayer)














app.listen(5678, () => console.log(`Running on port 5678`))
