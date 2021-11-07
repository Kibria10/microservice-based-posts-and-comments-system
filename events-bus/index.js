const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.post('/events', (req, res)=>{
    const event = req.body;

    axios.post('http://localhost:4000/evets', events);
    axios.post('http://localhost:4001/evets', events);
    axios.post('http://localhost:4002/evets', events);

    res.send({status: 'OK'});
});

app.listen(4005, ()=>{
    console.log('listening to port 4005');
});