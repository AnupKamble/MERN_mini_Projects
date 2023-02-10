
const express = require('express');
const { connection } = require('./config/db');

const app = express();

app.use(express.json());

app.get('/' , (req,res) => {
    res.send("Welcome to My App")
})







const port = process.argv[2] || 3035;
app.listen( port , ()=> {

    try {
        connection();
        console.log(`the server is listening on http://localhost:${port}`);
    }
    catch(err) {
        console.log(err.message);
    }
    
})