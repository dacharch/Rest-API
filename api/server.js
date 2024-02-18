const express = require('express')
const cors = require('cors')
const {mongoose, Model} = require('mongoose')
const app = express()
const bodyParser = require("body-parser");
const Data  = require('./Model/Data') ;



mongoose.connect('mongodb://localhost:27017/Table')

app.use(cors())
app.use(bodyParser.json());






app.get('/',(req,res)=>{
     res.send("hello Neerajcomputer")
     
})
app.get('/fetch',async(req,res)=>{
    const data = await Data.find();
    res.send(data);
})

app.delete('/delete/:id',async (req,res)=>{
     let id = req.params.id ;
     let deleteData = await  Data.deleteOne({"_id":id}) ;
     res.json(deleteData) ;
     
})
app.post('/submit',async (req,res)=>{
    let {name,subject,year} = await req.body ;
    const data = await Data.create({
        name,
        subject,
        year,
    })
    res.json(data) ;

})

app.listen(8080)

