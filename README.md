# Backend-BlogAp

Backend of a blog app - having features - post, likes , dislike , comment, fetching all posts


#example of requests
#creating a post
'http://localhost:3000/api/v1/posts/create' => post 
{
    "title": "Post2",
    "body": "Post1"
}

#fetch all posts
'http://localhost:4000/api/v1/posts' => get

#creating comments
'http://localhost:4000/api/v1/comments/create' => post 
{
    "post":"6429343df12f721b9c50b8",
    "user":"Ramdom 1",
    "body":"Random  Comment"
}

#liking a post 
'http://localhost:4000/api/v1/likes/like' => post
{
    "post":"642934c45v4612f721b9c50b8",
    "user":"john doe"
}

#disliking a post 
'http://localhost:4000/api/v1/likes/unlike' => post
{
    "post":"6429343f2b912f721b9c50b8",
    "like":"64293e833d3611dfcad7a664"
}
