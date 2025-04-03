const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    username : {
        type : String , 
        required : true 
    }
    ,
    mail : {
        type : String , 
        required : true ,
        unique : true
    }
    ,
    password : {
        type : String , 
        required : true 
    }
})
 
const model = mongoose.model("userSchema" , Schema) ;
module.exports = model ; 
// - Write an mongoose schema to store these three values.
//  Write an backend endpoint that will get the username, mail and password.