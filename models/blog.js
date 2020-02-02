//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true }
});

//Export function to create "Blog" model class
module.exports = mongoose.model('Blog', blogSchema);