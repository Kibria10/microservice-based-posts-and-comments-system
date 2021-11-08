const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res)=>{
    res.send(posts);
});


app.post('/events', (req, res)=>{

    if(type == "PostCreated"){
    const{id, title} = data;
    post[id] = {id, title, comments: []};
    }

    if(type == "CommentCreated"){
        const{id, content, postId} = data;
        const post = posts[postId];
        post.comments.push({id, content});
    }

    res.send({});
});


app.listen(4002, ()=>{
console.log('Listening to port 4002');

});