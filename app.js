const express=require('express');
const mongoose=require('mongoose')
require('dotenv').config()
const port=process.env.port;
const app=express();

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine","ejs");
mongoose.connect(process.env.mongo,{
    useNewUrlParser : true,
    useUnifiedTopology:true,
});

app.use(require('./routes/index'));
app.use(require('./routes/todo'));
app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})