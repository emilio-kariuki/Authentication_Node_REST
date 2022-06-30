import express from 'express';
import {v4 as uuidv4 }from 'uuid';

const router = express.Router();

let users = [];

//used to get the data from the json
router.get('/', (req,res) =>{
  res.send(users);
});
//used tpo send the data to the array

router.post('/', (req,res) =>{
  const user = req.body;
  users.push({...user, id: uuidv4()});
  res.send(users);
});

//used to update the data in the array

router.delete('/:id', (req,res) =>{
  const {id} = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`user with the id ${id} has been deleted`);
})

router.get('/:id', (req,res) => {
  const {id} = req.params;

  users = users.find((user) => user.id == id);

  res.send(users);
})

export default router;