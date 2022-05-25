const express=require('express')
const app = express()
const fs=require('fs')
app.get('/',(req,res)=>{

    fs.readFile('./data.json','utf-8',(err,data)=>{
        
            res.send(data)
} 
)})





const PORT=5000
app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server is running on the port ${PORT}`)
    }
    else{
        console.log('error happened')
    }
})