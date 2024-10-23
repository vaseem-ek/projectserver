const projects=require('../Models/projectModel')

exports.addProject=async(req,res)=>{
   try{
    const {title,description,languages,github,demo,image}=req.body
    const userId=req.payload
    // console.log(req.payload);
    
    if(!title || !description || !languages || !github || !demo || !image){
        res.status(406).json("invalid data")
    }else{
        const existingProject=await projects.findOne({github})
        if(existingProject){
            res.status(406).json("project already exist..")
        }else{
            const newProject=new projects({
                title,description,languages,github,demo,image,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
   }
   catch(err){
    console.log(err);
    res.status(400).json(err)
   }
}