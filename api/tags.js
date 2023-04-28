// api/users.js
const express = require('express');
const postsRouter = express.Router();

postsRouter.use((req, res, next) => {
  console.log("A request is being made to /posts");

  next();
});

// NEW
const { getAllTags } = require('../db');

// UPDATE
postsRouter.get('/', async (req, res) => {
  const posts = await getAllTags();

  res.send({
    posts
  });
});

module.exports = postsRouter;