
const express = require('express');
const { connection } = require('./config/db');
const cors = require('cors');
const { authRoutes } = require('./routes/auth.routes');
const { todosRoute } = require('./routes/todos.routes');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/isAuth', authRoutes);
app.use('/mytodos', todosRoute);

app.get('/', (req, res) => {
    res.send("Welcome to My App")
})


const port = process.argv[2] || 3035;
app.listen(port, async() => {

    try {
       await connection();
        console.log(`the server is listening on http://localhost:${port}`);
    }
    catch (err) {
        console.log(err.message);
    }

})