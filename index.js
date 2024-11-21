//import json server
const jsonServer=require('json-server')

//create server for media player application
const MPServer= jsonServer.create()
//create middleware
const middleware= jsonServer.defaults()
//define route for json file

const route=jsonServer.router('db.json')
//set up port for running server app
const PORT= 3000|| process.env.PORT

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Media Player started at port ${PORT} and waiting for cllient request `);
    
})