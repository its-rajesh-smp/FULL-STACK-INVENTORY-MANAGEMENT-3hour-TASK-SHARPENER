const Product = require("../Model/product")

exports.add = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body
        const dbResponse = await Product.create({ name, description, price, stock })
        res.send(dbResponse)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}





exports.get = async (req, res) => {
    try {
        const dbResponse = await Product.findAll()
        res.send(dbResponse)
    } catch (error) {
        console.log(error);
        res.send(false)
    }

}






exports.buy = async (req, res) => {
    try {
        const { productId, updatedStock } = req.body
        const dbResponse = await Product.update({ stock: updatedStock }, {
            where: { productId: productId }
        })

        res.send(dbResponse)
    } catch (error) {
        console.log(error);
        res.send(false)
    }
}






exports.update = async (req, res) => {
    try {

        const dbResponse = await Product.update(req.body.payload, {
            where: {
                productId: req.body.id
            }
        })
        res.send(true)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}




exports.delete = async (req, res) => {
    try {
        const { id } = req.body

        await Product.destroy({
            where: {
                productId: id
            }
        })
        res.send(true)
    } catch (error) {
        console.log(error);
        res.send(false)
    }
}