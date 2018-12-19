var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    author :{type:String,require:true},
    title :{type:String,require:true},
    blog_content :{type:String,require:true},
    status:{type:String,require:true},
    create_date :{type:Date,require:true}    
});

module.exports = mongoose.model('Blog',schema);