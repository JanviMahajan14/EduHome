// API for handling feedback request
const express = require('express');
const nodemailer = require("nodemailer");
const { USER, PASS } = require('../config/keys');
const router = new express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: USER,
    pass: PASS,
  },
});


router.post("/feedback", async (req, res) => {
  try {
    const { query, email, name } = req.body;
    if (!email || !query || !name) {
      return res.status(400).send({ error: "Please fill all the fields" });
    }

    const content = `EduHome App Feedback<br><br>
    Name: <b>${name || "no name"}</b><br>
    Email: <b>${email}</b><br>
    Message: <i>${query || "empty message"}</i><br>`;
      
    const mailOptions = {
     from: `${email}`,
     to: 'janvimahajan336@gmail.com',
     subject: 'Feedback Message',
     html: `<p>${content}</p>`, // plain text body
    };
      
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
         console.log(error);
        }
        else {
         console.log('Email sent: ' + info.response);
        }
    })

    res.json({ success: true, message: "Feedback recorded successfully" }).status(200);
      
  } catch (error) {
    res.statusCode = 400;
    res.send({ error: error.message});
  }
});

module.exports = router;
