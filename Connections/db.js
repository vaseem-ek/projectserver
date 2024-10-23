const mongoose=require('mongoose')


const connetionString=process.env.DATABASE

mongoose.connect(connetionString).then(res=>{
    console.log('server connected to MongoDB');
    
}).catch(err=>{
    console.log(err);
    
})