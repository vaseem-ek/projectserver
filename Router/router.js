const express=require('express')

const userController=require('../Controllers/userControler')
const projectController=require('../Controllers/projectControler')
const jwtMiddleware=require('../jwtMiddleWares/jwtMiddlewares')
const multerMiddle=require('../jwtMiddleWares/multerMiddleware')

const route=express.Router()
route.post('/reg',userController.userRegister)
route.post('/log',userController.userLogin)

route.put('/updateuser',jwtMiddleware,multerMiddle.single('profile'),userController.updateUser)

route.post('/addproject',jwtMiddleware,multerMiddle.single('image'),projectController.addProject)
route.get('/getpro',jwtMiddleware,projectController.getProject)
route.delete('/deletepro/:pid',jwtMiddleware,projectController.deleteProject)
route.put('/updatepro/:pid',jwtMiddleware,multerMiddle.single('image'),projectController.updateProject)
route.get('/allproject',projectController.getallproject)
route.get('/search',projectController.searchProjects)//here we use searching route

module.exports=route