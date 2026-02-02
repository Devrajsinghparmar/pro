const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js")
const ExpressError = require("./utils/ExpressError.js")
const Review = require("./models/review.js")


app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname ,"views"));
app.use(express.urlencoded({extended:true}));
app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname , "public")));

const listings = require("./Routes/listing.js")
const reviews = require("./Routes/review.js")


const mongo_Url = "mongodb://127.0.0.1:27017/wanderlust";
main()
    .then(()=>{
        console.log("connected to mongoDB")
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
  await mongoose.connect(mongo_Url);
}
//------------------>  main Apis  <------------------

app.get("/", (req , res)=>{
    res.send( "welcome this is my first project")
});
//-----------------listingSchema for restrict add blank post 
//-----------------reviewSchema for restrict add blank review 

app.use("/listings" , listings);
app.use("/listings/:id/reviews" , reviews);


app.use((err,req,res,next) =>{
    let {statusCode = 500 , message = "Something went wrong"} = err;
    res.render("error.ejs" ,{err})
    // res.status(statusCode).send(message)
});

app.listen(1008,()=>{
    const port = 1008;
    console.log("server is running at port", {port})
});