
const Post = require('../models/postModel');

const Like = require('../models/likeModel');

exports.createLike = async (req, res) => {
    try{
        const {post , user} = req.body;
        const like = new Like({post, user});
        const savedLike = await like.save();

        //updating the post collection 

        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes : savedLike._id}} , {new : true});

        res.json({
            post : updatedPost,
        })

    }
    catch (err) {
        return res.status(500).json({
            error : 'Error while doing Like'
        })
    }
}



exports.unlikePost = async (req, res) => {
    try{
        const {post, like} = req.body;
        //finding and deleting the like from post

        const deletedLike = await Like.findOneAndDelete({post : post, _id : like});

        //updating the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull : {likes : deletedLike._id}}, {new : true});


        res.status(200).json({
            post : updatedPost,
        })

    }
    catch (err) {
        return res.status(500).json({
            error : 'Error while disliking Post'
        })
    }
}