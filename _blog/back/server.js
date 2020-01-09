const express= require('express')
const mongoose=require('mongoose')
const cors=require('cors');
const bodyParser=require('body-parser');

const ArticleRoute=require('./routes/Article.route')

mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost;27017/blog',
{useNewUrlParser:true ,useUnifiedTopology:true}).then(()=>{console.log('connected')})

const app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use('/api',ArticleRoute)
 const port=process.env.PORT||4001;

 
 app.listen(port);