import express from "express";
import {v4 as uuidv4} from 'uuid';
uuidv4();

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Waleed",
    age: 25,
  },
];

router.get("/", (req, res) => {

  res.send(users);
});

router.post('/', (req, res) => {
  console.log('POST Route is reached');

  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.firstName} added to the database `);
});

export default router;
