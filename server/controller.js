const guest = require('./db.json')

let guestId = 4

//Get, Put, Delete, Post

module.exports = {
    getGuest: (req, res) => {
        res.status(200).send(guest)
    },

    addGuest: (req, res) => {
        const {name, dish, comment} = req.body

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
        
        // console.log(req.params.id)
        // console.log(req.body)
        
        const index = guest.findIndex(element => element.id === +req.params.id)
        
        
        const {name, dish, comment} = req.body 
        
        let updateGuestObj = {
            id: req.params.id,
            name: name,
            dish: dish,
            comment: comment
        }

        guest[index] = (updateGuestObj)

        //notes:  we weren't using the variable "index" above that targets the element id we want, based off the req.params.id
        //We also don't want to use push (line 55 was guest.push) on our guest array, this method appends new elements to the end of the array
        //We need to use our index variable on our array(guest) and set the new value to the updateGuestObj.
        //However, doing this does not maintain persistence with other elements in the object (i.e. name) unless we include it in the reqest body
        //If you want to update only cetain elements in an array, you need to use PATCH, rather than PUT.
        //PUT = updates the entire resource (every element in the array) 
        //PATCH = updates specific elements.
        
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

