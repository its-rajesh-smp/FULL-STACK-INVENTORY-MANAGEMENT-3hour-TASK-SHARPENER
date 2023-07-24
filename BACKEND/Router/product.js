const express = require("express")
const productController = require("../Controller/product")
const router = express.Router()

router.post("/add", productController.add)
router.post("/get", productController.get)
router.post("/update", productController.update)


module.exports = router