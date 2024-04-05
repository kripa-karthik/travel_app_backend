const CryptoJS=require('crypto-js');
const User=require('../model/user.model');

const signupHandler=async(req,res)=>{
    try{

        const newUser=new User({
            username:req.body.username,
            number:req.body.number,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString()
        });
        const saveUser=await newUser.save();
        res.status(201).json(saveUser);
    }catch(err){
        res.status(500).json({message:"error creating a user"})
         
    }
}

module.exports=signupHandler;