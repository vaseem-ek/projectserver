require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./Connections/db')

const router=require('./Router/router')
const jwt=require('./jwtMiddleWares/jwtMiddlewares')

const pfServer=express()

pfServer.use(cors())
pfServer.use(express.json())
// pfServer.use(jwt)
pfServer.use(router)

const PORT=3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log('server running at:',PORT)
})
pfServer.get('/',(req,res)=>{
    res.send('<h1>hello</h1>')
})