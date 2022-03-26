import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  console.log("POST Route is reached");

  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database `);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const FoundUser = users.find((user) => user.id === id);

  res.send(FoundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User with the id ${id} deleted successfully from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id == id);

  const { firstName, lastName, age } = req.body;

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} is successfully updated`);
};
