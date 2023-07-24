const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')
const sequelize = require("./util/database")

const product = require("./Router/product")

const app = express()




// MIDDLEWIRES
app.use(cors())
app.use(body_parser.urlencoded({ extended: false }))
app.use(express.json())
app.use(product)



// SERVER & DATABASE START
sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log("SERVER IS LISTENING");
    })
}).catch((err) => {
    console.log(err);
})





