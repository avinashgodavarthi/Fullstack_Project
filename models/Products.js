var mongoose = require("mongoose")

var productschema = new mongoose.Schema({
    Title : {
        type : String,
        required : true
    },
    Description :{
        type : String,
        required:true
    },
    Price : {
        type : Number,
        required : true
    },
    image : {
        url:{
            type : String,
            required:true
        },
        publicId : {
            type : String,
            required : true
        }
    }

})

module.exports = mongoose.model("PRODUCTS",productschema)