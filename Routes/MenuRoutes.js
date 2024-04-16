const express = require("express");
const router = express.Router();

const Menu = require("../model/menu");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data);
    const saveMenu = await newMenu.save();
    res.status(200).json(saveMenu);
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("data fetchdata");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:whattype", async (req, res) => {
  try {
    const whattype = req.params.whattype;
    if (whattype === "a" || whattype === "b" || whattype === "c") {
      const response = await Menu.find({ what: whattype });
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Internal server error" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports = router;
