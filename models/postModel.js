const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true,
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,//referring to Like Schema
        ref : 'Like'
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,//referring to Like Schema
        ref : 'Comment'
    }],
})

module.exports = mongoose.model('Post', postSchema);