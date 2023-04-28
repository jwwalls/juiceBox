// api/users.js
const express = require('express');
const tagsRouter = express.Router();


tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /posts");

  next();
});

// NEW
const { getAllTags } = require('../db');

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    const { tagName } = req.params;
    try {
      const allTags = await getPostsByTagName(tagName);
  
      const tags = allTags.filter(tag => {
        if (tag.active) {
          return true;
        } else if (req.user && post.author.id === req.user.id) {
          return true;
        } else {
          return false;
        }
      });
  
      res.send({
        tags
      });
    } catch ({ name, message }) {
      next({ name, message });
    }
  });
// UPDATE
tagsRouter.get('/', async (req, res) => {
  const posts = await getAllTags();

  res.send({
    posts
  });
});

module.exports = tagsRouter;