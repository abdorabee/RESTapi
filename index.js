import express from "express";
import bodyParser from "body-parser";

import usersRoute from './routes/users.js';

const app = express();

const PORT = 5000; // port

app.use(bodyParser.json());

app.use('/users',usersRoute);

app.get('/',(req,res) => {
    console.log('[TEST] !');

    res.send('It seems to be working...');
});

app.listen(PORT , ()=>console.log(`Server running on Port: http://localhost:${PORT}`));