const express = require("express");
const router = express.Router();

const User = require("../model/demo_model");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newUser = new User(data);
    const saveUser = await newUser.save();
    console.log("data saved");
    res.status(200).json(saveUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    console.log("data fetchdata");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype; //! get reuqest for specific work type
    if (worktype === "a" || worktype === "b" || worktype === "c") {
      const response = await User.find({ work: worktype });
      res.status(200).json(response);
    } else {
      console.log("error");
      res.status(404).json({ error: "Invalid page" });
    }
  } catch (error) {
    res.status(404).json({ error: "Invalid req" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user_id = req.params.id;
    const updated = req.body;
    const response = await User.findByIdAndUpdate(user_id, updated, {
      new: true, //! return new updated document
      runValidators: true, //! check validations
    });

    if (!response) {
      return res.status(404).json({ error: "id not found" });
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error for update" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const delete_id = req.params.id;
    const response = await User.findByIdAndDelete(delete_id);

    if (!response) {
      return res.status(404).json({ error: "page not found" });
    }

    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error for update" });
  }
});

module.exports = router;
