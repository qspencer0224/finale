const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post: {type: String, required: true},
    subject: {type: String, required: false}
}, 
    {timestamp: true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;