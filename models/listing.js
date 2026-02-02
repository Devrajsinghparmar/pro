
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js")

const ListingSchema = new Schema({
    title: {
       type: String,
       required: true,
    },
    description: String,
    Price:  Number,
    location: String,
    country: String,
    image:{
        filename: String,
        url:{
            type: String,
            default: "https://www.shutterstock.com/image-photo/autumn-nature-landscape-lake-bridge-fall-2198245029",
       
        set: (v) => v===""? "https://www.shutterstock.com/image-photo/autumn-nature-landscape-lake-bridge-fall-2198245029" : v,
       }
    },
    reviews:[
        {
            type :mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }

    ]
})

ListingSchema.post("findOneAndDelete" ,async(listing)=>{
    if(listing){
    await Review.deleteMany({_id: {$in :listing.reviews}})
    }
})

const Listing = mongoose.model("Listing" , ListingSchema);
module.exports = Listing;
