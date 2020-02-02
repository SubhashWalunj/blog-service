const express = require('express');
const router = express.Router();

const BlogController = require('../controllers/blog.controller');

router.get('/', function (req, res, next) {
  const blogController = new BlogController();
  blogController
    .getAll()
    .then(blogs => {
      res.status(200).send(blogs);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.post('/', function (req, res, next) {
  const blogController = new BlogController();
  blogController
    .create(req.body)
    .then(blog => {
      res.status(200).send(blog.id);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.get('/:id', function (req, res, next) {
  const blogController = new BlogController();
  blogController
    .get(req.params.id)
    .then(blog => {
      res.status(200).send(blog);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.delete('/:id', function (req, res, next) {
  const blogController = new BlogController();
  blogController
    .delete(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
