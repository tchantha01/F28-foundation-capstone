const guest = require('./db.json')
const players = require('./dbPlayers.json')

let guestId = 4
let playerId = 4

//Get, Put, Delete, Post

module.exports = {
    getGuest: (req, res) => {
        res.status(200).send(guest)
    },

    getPlayer: (req, res) => {
        res.status(200).send(players)
    }, 

    addGuest: (req, res) => {
        const {name, dish, comment} = req.body

        console.log(req.body)

        let newGuestObj = {
            id: guestId,
            name: name,
            dish: dish,
            comment: comment
        }

        guest.push(newGuestObj)
        
        guestId++

        res.status(200).send(guest)

    },

    deleteGuest: (req, res) => {
        const index = guest.findIndex(element => element.id === +req.params.id)

        guest.splice(index, 1)

        res.status(200).send(guest)
    },

    updateGuest: (req, res) => {
        
        console.log(req.body)
        
        let users = guest.findIndex(element => element.name === req.body.name)

        const {name, dish, comment} = req.body 
        
        let updateGuestObj = {
            name: name,
            dish: dish,
            comment: comment
        }

        guest[users] = updateGuestObj

        
        res.status(200).send(guest)

    },

    addPlayer: (req, res) => {
        const {name} = req.body

        console.log(req.body)

        let newPlayerObj = {
            id: playerId,
            name: name
            
        }

        players.push(newPlayerObj)
        
        playerId++

        res.status(200).send(players)

    },

    deletePlayer: (req, res) => {
        const index = players.findIndex(element => element.id === +req.params.id)

        players.splice(index, 1)
        
        

        res.status(200).send(players)
    }

}



