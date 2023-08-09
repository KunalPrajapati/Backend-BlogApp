const mongoose = require('mongoose');

//route handler
const commentSchema = new mongoose.Schema({
    post : {
        type : mongoose.Schema.Types.ObjectId, //referring other model through id 
        ref : "Post", //referring Post Model
    },
    user :{
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true,
    }
})




//exporting

module.exports = mongoose.model('Comment', commentSchema); //exporting 'commentSchema' as 'Comment'