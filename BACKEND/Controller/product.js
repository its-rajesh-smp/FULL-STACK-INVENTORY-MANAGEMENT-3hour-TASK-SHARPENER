const Product = require("../Model/product")

exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body
        const dbResponse = await Product.create({ name, description, price, stock })
        res.send(dbResponse)

    } catch (error) {
        console.log(error);
        res.send(false)
    }
}





exports.getAllProducts = async (req, res) => {
    try {
        const dbResponse = await Product.findAll()
        res.send(dbResponse)
    } catch (error) {
        console.log(error);
        res.send(false)
    }

}






exports.buyProduct = async (req, res) => {
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






exports.updateProduct = async (req, res) => {
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




exports.deleteProduct = async (req, res) => {
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