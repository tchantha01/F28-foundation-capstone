const guest = require('./db.json')

let guestId = 4

//Get, Put, Delete, Post

module.exports = {
    getGuest: (req, res) => {
        res.status(200).send(guest)
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
        
        console.log(req.params.id)
        console.log(req.body)
        
        // const index = guest.findIndex(element => element.id === +req.params.id)
            let users = guest.find(element => element.name === req.params.name)

        app.put(`${baseURL}/updateGuest/${name}`, (req, res) => {
            
            let existingName = req.params.name
            let newName = req.body.name
            for (let i = 0; i < users.length; i++) {
                if (users[i].name === existingName) {
                    users[i].name = newName
                    res.status(200).send("guest updated")
                    return
                }

            }

            res.status(404).send("guest not found")

        })

        const {name, dish, comment} = req.body 
        
        let updateGuestObj = {
            // id: req.params.id,
            name: name,
            dish: dish,
            comment: comment
        }

        guest[index] = (updateGuestObj)

        
        res.status(200).send(guest)

    }
}

























// require('dotenv').config()

// const {CONNECTION_STRING} = process.env

// const Sequelize = require('sequelize')

// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// })

