const express = require('express');
const router = express.Router();


//import controller

const {createComment} = require('../controllers/CommentController');
const {createPost, getAllPosts} = require('../controllers/PostController');
const {createLike, unlikePost} = require('../controllers/LikeController');


//mapping
router.post('/likes/like', createLike);
router.post('/likes/unlike', unlikePost);
router.post('/comments/create',createComment)
router.post('/posts/create',createPost)
router.get('/posts',getAllPosts); 


//exports
module.exports = router;