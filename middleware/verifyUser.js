const jwt=require('jsonwebtoken');

const verifyUser=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
        jwt.verify(token,ACCESS_TOKEN,(err,user)=>{
            if(err) res.status(403).json({message:"invalid token"})
            req.user=user;
            next()
        })
    }

}

module.exports=verifyUser;