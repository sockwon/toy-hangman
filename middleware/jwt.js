const jwt = require("jsonwebtoken");
const secretKey = "key"

const newJwt = (payLoad)=>{
    return jwt.sign(payLoad, secretKey);
}

const isRightToken = (jwtToken)=>{
    return jwt.verify(jwtToken, secretKey)
}

const validationToken = async (req,res,next)=>{
    try {
        const token= req.headers.authorization;
        const result = isRightToken(token);
        if(result){
            console.log(result)
            const {id, email} = result
            req.body.user_id = id;
            req.body.email = email;
            next();
        }
        
    }catch(err){
        console.log(err)
        res.status(400).json({MESSAGE : "INVALID TOKEN!"})
    }
}

module.exports = {
    newJwt, isRightToken, validationToken
}