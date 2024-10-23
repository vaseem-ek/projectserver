const jwt=require('jsonwebtoken')


const jwtMiddleware=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
        const data =jwt.verify(token,process.env.SECRET_KEY)
        console.log(data ,"token");
        if(data){
            const {userId}=data
            req.payload=userId
            next()
        }else{
            res.status(400).json('invalid token')
            
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json
        
    }
   
    
    // next()
}

module.exports=jwtMiddleware