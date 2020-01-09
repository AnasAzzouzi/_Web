const express= require('express')
const router=express.Router()
let ArticleSchema=require('../Models/Article')



router.route('/addArticle').post((req,res,next)=>{
    ArticleSchema.create(req.body,(error,data)=>{

        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})

router.route('/Article').get((req,res,next)=>{

    ArticleSchema.find(req.body._id,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})
router.route('/Articles').get((req,res,next)=>{
    ArticleSchema.find((error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})

router.route('/UpdateArticle').put((req,res,next)=>{
    ArticleSchema.findByIdAndUpdate(req.body.id,{$set:req.body},(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})
router.route('/DeleteArticle').delete((req,res,next)=>{
    ArticleSchema.findByIdAndDelete(req.body._id,(error,data)=>{

        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})

module.exports=router