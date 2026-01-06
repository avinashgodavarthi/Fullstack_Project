var express = require("express")

var upload = require("../middleware/upload")
const { createproducts, getallproducts, getsingleproducts, updatedproducts, deletedproducts, updateproduct,  } = require("../controllers/ProductControllers")
const authmiddleware = require("../middleware/authMiddleware")


var router = express.Router()

// post the products//
router.post("/add",authmiddleware,upload.single("image"),createproducts)

//get all products//
router.get("/allproducts", getallproducts)

//get single products by id //

router.get("/singleproduct/:id",getsingleproducts)

// UPDATE THE PRODUCTS only//
// router.put("/update/:id",updatedproducts)


// update the products along with image//
router.put("/update/:id",upload.single("image"),updateproduct)


router.delete("/delete/:id",deletedproducts)


module.exports = router