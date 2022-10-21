const express = require("express");
const bagsContoller = require("../controller/bagcontroller");

const bagsRoute = express.Router();

bagsRoute.post("/", bagsContoller.addBags);
bagsRoute.get("/", bagsContoller.getAllBags);
bagsRoute.put("/:id", bagsContoller.updateBagById);
bagsRoute.delete("/:id", bagsContoller.deleteBagById);

module.exports = bagsRoute;
