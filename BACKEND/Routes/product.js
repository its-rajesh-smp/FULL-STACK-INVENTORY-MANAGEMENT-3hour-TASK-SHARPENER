const express = require("express")
const productController = require("../controllers/product")
const router = express.Router()

router.post("/addProduct", productController.addProduct)
router.post("/getAllProducts", productController.getAllProducts)
router.post("/buyProduct", productController.buyProduct)
router.post("/updateProduct", productController.updateProduct)
router.post("/deleteProduct", productController.deleteProduct)


module.exports = router