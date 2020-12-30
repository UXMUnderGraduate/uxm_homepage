const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({
    kr:String,
    eng:String,
    wr:{type:String, default:"yes"},
    date_start:{type: Date,defalut:Date.now},
    date_end:{type: Date,defalut:Date.now},
    category:String,
    createdAt:{type:Date, default:Date.now},
    
},{collection:'project'});

module.exports = mongoose.model('project',projectSchema);
