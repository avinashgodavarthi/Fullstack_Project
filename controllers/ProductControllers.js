var {uploadToCloudinary} = require("../helpers/cloudinaryHelper")

var Product = require("../models/Products")

var createproducts = async(req,res)=>{
    try{
        var{Title,Description,Price} = req.body

        if(!Title || !Description || !Price){
            return res.status(200).json({message:"Please Fill the Fields"})

        }

        if(!req.file){
            return res.status(200).json({message: "Image Missing"})
        }

        var{url,publicId} = await uploadToCloudinary(req.file.path)

        var newproduct = await Product.create({
            Title,
            Description,
            Price,
            image : {
                url,
                publicId

            }
        })
        return res.status(200).json({newproduct,message: "Product added successfully"})

    }
    catch(error){
        console.log("error",error);
        
    }
}

//get all products//
var getallproducts = async(req,res)=>{
    try{
        var allproducts = await Product.find()
        return res.status(200).json({allproducts})
    }
    catch(error){
        console.log("error",error);
        
    }
}

// get by id//
var getsingleproducts = async (req, res) => {
    try {
        const singleproduct = await Product.findById(req.params.id);

        if (!singleproduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json(singleproduct);
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ message: "Server error" });
    }
};

// update the product only//

// var updatedproducts = async(req,res)=>{
//     try{
//         var updateproduct = await Product.findByIdAndUpdate(req.params.id,{
//             Title : req.body.Title,
//             Description : req.body.Description,
//             Price:req.body.Price


//         })
//         return res.status(201).json({updateproduct,message:"product updated successfully"})

//     }
//     catch(error){
//         console.log("error",error);

        
//     }
// }


// update the product along with image//
var updateproduct = async(req,res)=>{
    try{
        var id =  req.params.id 
        var {Title,Description,Price} = req.body 
        if(!Title || !Description || !Price){
            return res.status(200).json({message : "feilds are missing "})
        }
        if(!req.file){ 
            return res.status(200).json({message : "image not found"})

        }
        var {url,publicId} = await uploadToCloudinary(req.file.path)

        var updatedProduct = await Product.findByIdAndUpdate(id,{
            Title,
            Description,
            Price,
            image: { url, publicId }

        })
        return res.status(201).json({message : updatedProduct,a: "image also updated "})


    }catch(error){
        console.log("error",error);
    }
}



var deletedproducts = async(req,res)=>{
    try{
        var deleteproducts = await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json({message: "Product deleted successfully"})
    }
    catch(error){
        console.log("error",error);
        
    }
}




module.exports = {
    createproducts,getallproducts,getsingleproducts,updateproduct,deletedproducts
}