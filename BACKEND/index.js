const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')
const sequelize = require("./utils/database")

// Routes
const product = require("./routes/product")


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





