const mongoose=require('mongoose')
var Schema = mongoose.Schema()

var ArticleSchema= new Schema({

    name:{type:String},
    title:{type:String},
    Content:{type:String},
    votes:{type:Number},
    category:{type:String}
},
{
    collection :'Articles'
})
module.exports=mongoose.model('Article',ArticleSchema)