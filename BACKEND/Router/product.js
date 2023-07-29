const express = require("express")
const productController = require("../Controller/product")
const router = express.Router()

router.post("/add", productController.add)
router.post("/get", productController.get)
router.post("/buy", productController.buy)
router.post("/update", productController.update)
router.post("/delete", productController.delete)


module.exports = router