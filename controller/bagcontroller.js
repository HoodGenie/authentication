const bagsModel = require("../model/bagsmodel");

async function addBags(req, res) {
  const newbag = req.body;
  try {
    const bag = await bagsModel.create(newbag);
    res.status(200).json({
      message: "bag added successfully",
      data: bag,
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}

async function getAllBags(req, res, next) {
  try {
    const bags = await bagsModel.findAll();
    res.status(200).json(bags);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}

async function updateBagById(req, res) {
  const bagId = req.params.id;
  const newBagInfo = req.body;
  try {
    const bag = await bagsModel.update(newBagInfo, {
      where: {
        id: bagId,
      },
    });
    res.status(200).json({
      message: "bag updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}

async function deleteBagById(req, res) {
  const bagId = req.params.id;
  try {
    const bag = await bagsModel.destroy({
      where: {
        id: bagId,
      },
    });
    res.status(200).json({
      message: "bag deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}

module.exports = {
  getAllBags,
  addBags,
  updateBagById,
  deleteBagById,
};
