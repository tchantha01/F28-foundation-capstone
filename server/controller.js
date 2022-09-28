const guest = require('./db.json')


//Get, Put, Delete, Post

module.exports = {
    getGuest: (req, res) => {
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

