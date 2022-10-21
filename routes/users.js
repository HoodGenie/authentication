const express = require("express");
const UserModel = require("../model/usersmodel");

const userRoute = express.Router();

userRoute.post("/", (req, res) => {
  const User = req.body;
  console.log(User);
  UserModel.create(User)
    .then((User) => {
      res.status(201).send({
        message: "User successfully added",
        data: User,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err.message);
    });
});
userRoute.get("/", (req, res) => {
  UserModel.find()
    .then((User) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});
userRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const user = req.body;
  UserModel.findByIdAndUpdate(id, body, { new: true })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send(err.message);
    });
});
userRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({
        message: "user successfully deleted",
      });
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
});
module.exports = userRoute;
