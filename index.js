import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './Routes/users.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.use('/users', usersRouter);


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);

});


