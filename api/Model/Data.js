const mongoose = require('mongoose')

const {Schema}  = mongoose;

const dataSchema = new Schema({
    name:String,
    subject:String,
    year:String
})


const DataModel = mongoose.model('Table',dataSchema);

module.exports = DataModel  ;
