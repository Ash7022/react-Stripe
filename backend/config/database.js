const mongoose = require("mongoose");

const connectDatabase = ()=>{

    mongoose.connect("mongodb://localhost:27017/StripeDemo",{useNewUrlParser: true,useUnifiedTopology:true}).then((data)=>{
        console.log(`Mongodb connected with the server ${data.connection.host}`)
    })
}

module.exports = connectDatabase