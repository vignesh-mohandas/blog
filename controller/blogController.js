const Blog = require("../models/blog");

exports.listAllBlogs = (req, res) => {
  Blog.find({}, (err, blog) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(blog);
  });
};

exports.createNewBlog = (req, res) => {
  let newBlog = new Blog(req.body);
  newBlog.save((err, blog) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(blog);
  });
};

exports.readBlog = (req,res) => {
  Blog.findById(req.params.blogid, (err, blog) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(blog);
  });

};

exports.updateBlog = (req, res) => {
  Blog.findOneAndUpdate(
    { _id: req.params.blogid },
    req.body,
    { new: true },
    (err, blog) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(blog);
    }
  );
};

exports.deleteBlog = (req, res) => {
  Blog.remove({ _id: req.params.blogid }, (err, blog) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Blog successfully deleted" });
  });
};