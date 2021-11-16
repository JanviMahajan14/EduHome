const express = require("express");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const User = require("../models/user");
const router = new express.Router();


router.post("/users/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    const { Username, email, password, role } = req.body;
    if (!Username || !email || !password) {
      return res.status(400).send({ error: "Please fill all the fields" });
    }

    const email_query = await User.findOne({ email });
    if (email_query) {
      return res.status(400).send({ error: "Email already exists!" });
    }
    const token = await user.generateAuthToken();
    await user.save();
    res.send({ user, token });

  } catch (error) {
    res.statusCode = 400;
    res.send({ error: error.message });
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ error: "Please fill all the fields" });
    }

    const user = await User.findOne({ email: req.body.email });
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!user || !isMatch) {
      throw new Error("Invalid email or password");
    }
    const token = await user.generateAuthToken();
    await user.save();
    res.send({ user, token });
  } catch (error) {
    res.statusCode = 400;
    res.send({ error: error.message});
  }
});

module.exports = router;
