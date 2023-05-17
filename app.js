//jshint erversion:13
const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const https=require("https");
const app=express()
port=3000
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})
app.post("/",(req,res)=>{
    const  firstname=req.body.fname;
    const lastname=req.body.lname;
    const emailid=req.body.email;
    // console.log(firstname,lastname,emailid);
    const data ={
        members: [
            {
            email_address: emailid,
            status:"subscribed",
            merge_fields:{
                FNAME: firstname,
                LNAME: lastname,
            }
           
            }
        ]
    };
    const jsondata=JSON.stringify(data)
    const url="https://us21.api.mailchimp.com/3.0/lists/79098c5292"
    const options ={
        method:"POST",
        auth:"abhisan01:899e54a9dcce0eaaa72211abd2c5ce2b-us21"
    }
    const request = https.request(url,options,function(response){

         if(response.statusCode==200){
            res.sendFile(__dirname+"/success.html");
         }
         else{
            res.sendFile(__dirname+"/failure.html");
         }



        response.on("data",function(data){
              console.log(JSON.parse(data));
        })
        
    })
    request.write(jsondata);
    request.end();

});
app.post("/failure",(req,res)=>{
    res.redirect("/");
})

app.listen(process.env.PORT || port,()=>{
    console.log("server is running on port 3000");
})

//api key :899e54a9dcce0eaaa72211abd2c5ce2b-us21
// list id :79098c5292