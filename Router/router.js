const express=require('express')

const userController=require('../Controllers/userControler')
const projectController=require('../Controllers/projectControler')
const jwtMiddleware=require('../jwtMiddleWares/jwtMiddlewares')

const route=express.Router()
route.post('/reg',userController.userRegister)
route.post('/log',userController.userLogin)
route.post('/addproject',jwtMiddleware,projectController.addProject)

module.exports=route