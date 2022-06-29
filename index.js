import express from 'express';
import bodyParser from 'body-parser';
import expressRouter from './Routes/users.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.use('/users', expressRouter);

app.listen(PORT, () =>{

    console.log("Server is running on port 3000 http://localhost:3000");
})