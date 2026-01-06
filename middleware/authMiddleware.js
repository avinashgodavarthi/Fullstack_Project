var jwt = require("jsonwebtoken")

var authmiddleware =(req,res,next)=>{

    var authHeaders = req.headers["authorization"]
    var token = authHeaders && authHeaders.split(" ")[1]
    console.log(token);

    if(!token){
        return res.status(200).json({message: "cannot access the token"})
    }
    
    try{
        var decodedtoken = jwt.verify(token,process.env.JWT_TOKEN)
        console.log(decodedtoken);
        next()

    }
    catch(error){
        console.log("error",error);
        
    }
}

module.exports = authmiddleware
