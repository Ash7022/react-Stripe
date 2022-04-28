const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
     ammount:{
         type: Number,
         required: true,

     },
     currency:{
         type:String,
         default:"usd",
     },
     customer:{
         type:String,
         required: true,
     },
     receipt_email:{
        type: String,
        required: true,

     },
     description:{
        type: String,
        required: true,

     },
     shipping:{
        type: String,

     },
     address:{
         country:token.card.address_country
     }

    
})
module.exports = mongoose.model("Colleges",collegeSchema);