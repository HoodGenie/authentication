const express = require("express");
// const Shoes = require("../model/shoesmodel");
const ShoesModel = require("../model/shoesmodel");

const shoeRoute = express.Router();

shoeRoute.get("/", (req, res) => {
  ShoesModel.find()
    .then((shoes) => {
      res.status(200).send(shoes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});
shoeRoute.post("/", (req, res) => {
  const Shoes = req.body;
  console.log(Shoes);
  ShoesModel.create(Shoes)
    .then((Shoes) => {
      res.status(201).send({
        message: "Shoe added successfully",
        data: Shoes,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err.message);
    });
});
shoeRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const shoe = req.body;
  ShoesModel.findByIdAndUpdate(id, shoe, { new: true })
    .then((shoe) => {
      res.status(200).send(shoe);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});
shoeRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  ShoesModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({
        message: "shoe successfully deleted",
        data: "",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err.message);
    });
});

module.exports = shoeRoute;
