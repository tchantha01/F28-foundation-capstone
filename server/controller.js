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
        
        // console.log(req.params.name)
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

    }
}

// let users = guest.findIndex(element => element.name === req.params.name)
        //     console.log(users)
        // app.put(`${baseURL}/updateGuest/${name}`, (req, res) => {
            
        //     let existingName = req.params.name
        //     let newName = req.body.name
        //     for (let i = 0; i < users.length; i++) {
        //         if (users[i].name === existingName) {
        //             users[i].name = newName
        //             res.status(200).send("guest updated")
        //             return
        //         }

        //     }
                
        //         console.log(req.body)
            
        //         res.status(404).send("guest not found")

        // })

        // const {name, dish, comment} = req.body 
        // console.log(req.body)
        // let updateGuestObj = {
        //     // id: req.params.id,
        //     name: name,
        //     dish: dish,
        //     comment: comment
        // }

        // guest[users].dish = (dish)

        
        // res.status(200).send(guest)
























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

