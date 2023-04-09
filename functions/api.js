const serverless = require("serverless-http");
const express = require('express');

const app= express();
const router = express.Router();

router.get('/', (req, res)=> {
    res.json({
        'path': 'Home',
        'firstName': 'Lovedeep'
    });
});

router.get('/json', (req, res)=>{
    res.json({
        'path':'json',
        'author':'Lovedeep'
    });
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);