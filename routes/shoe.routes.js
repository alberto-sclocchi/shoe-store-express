const express = require("express");
const router = express.Router();
const Shoe = require("../models/Shoe.model")

router.get("/", (req, res, next) => {
  Shoe.find()
  .then((shoesDB) => {
    res.json({success: true, data: shoesDB});
  })
  .catch((err) => {
    res.json({success: false, data: err})
  })
});

router.post("/", (req, res, next) => {
  Shoe.create(req.body.shoe)
  .then((shoeDB) => {
    res.json({success: true, data: shoeDB});
  })
  .catch((err) => {
    res.json({success: false, data: err})
  })
});

router.get("/:shoeId", (req, res, next) => {
  Shoe.findById(req.params.shoeId)
  .then((shoeDB) => {
    res.json({success: true, data: shoeDB});
  })
  .catch((err) => {
    res.json({success: false, data: err})
  })
});

module.exports = router;
