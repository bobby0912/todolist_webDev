const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const app=express();


app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("/*link*/");

const itemsSchema={
    name:String
};

const Item=mongoose.model("Item",itemsSchema);

const item1=new Item({
    name:"welcome to your todolist!."
});

const item2=new Item({
    name:"hit the + button to aff anew item."
});

const item3=new Item({
    name:"<-- hit this to delete an item."
});

const defaultItems=[item1,item2,item3];

Item.insertMany(defaultItems,function(err){
    if(err){
    console.log(err);}
    else{
    console.log("successfully saved items to db.");}
});

app.get("/",function(req,res){

    res.render("list",{listTitle:"Today",newListItems:items});
});

app.post("/",function(req,res){
    var item =req.body.newItem;
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems:workItems})
});

app.post("/work",function(req,res){
    let item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000,function(){
    console.log("server started!");
});  
