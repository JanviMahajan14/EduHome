const Post = require("../models/post");
const express = require("express");
const router = new express.Router();

router.post("/createPost", async (req, res) => {
  try {
    const post = await new Post(req.body.post)
    await post.save();
    res.send({ data: "article published !"});

  } catch (error) {
    res.statusCode = 400;
    res.send({ error: error.message });
  }
});

router.get("/getAllPosts", async (req, res) => {
  try {
    let category = req.query.category;
    console.log(req.query)
    // if (category) {
    //   const post = await Post.find({ categories : category });
    //   const data = await JSON.stringify(post);
    //   res.send( data );
    // }

    const post = await Post.find({});
    const data = await JSON.stringify(post);
    res.send( data );
      
  } catch (error) {
    res.statusCode = 400;
    res.send({ error: error.message });
  }
});

router.get("/getpost/:_id", async (req, res) => {
  try {
    const post = await Post.findById(req.params._id);
    const data = await JSON.stringify(post);
    res.send( data );
      
  } catch (error) {
    res.statusCode = 400;
    res.send({ error: error.message });
  }
});




module.exports = router;