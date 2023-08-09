//importing model;

const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

//business logic

exports.createComment = async (req, res) => {
    try{

        //fetch data from req body

        const {post, user, body} = req.body;

        //create comment object
        const comment = new Comment({
            post, user, body
        });
 
        //save comment object into database

        const savedComment = await comment.save(); //using save function to save comment rather than 'create'

        //finding post using id and add the new comment to is comment array;
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments : savedComment._id}}, {new : true})
                            .populate('comments')
                            .exec();
        //$push is used to update the new entry; $pull is used to remove the entry;

        // const updatedPost = await Post.findByIdandUpdate(post, {$push : {comments : saveComment._id}}, {new : true}) 
        // |-> in this post is getting searched by using 'findByIdandUpdate' and then $push is used to update the entry to the comments array , and {new : true} gives the or returns the updated document ;


        res.json({
            post : updatedPost,
        });


    }
    catch(err){
        return res.status(500).json({
            error : 'Error while creating object'
        })
    }
}