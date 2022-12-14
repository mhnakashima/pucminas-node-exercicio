require('dotenv').config() 
 
const express = require ('express') 
const apiRouter = require('./api/routes/api_routes') 

const cors = require('cors'); 
const path  = require ('path') 
const app = express () 
 
app.use(cors()) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
 
app.use('/app', express.static (path.join (__dirname, '/public'))) 
app.use ('/api', apiRouter)

let port = process.env.PORT || 3000 
 
app.listen (port) 