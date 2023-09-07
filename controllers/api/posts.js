const Posts = require("../../models/Post")

const edit = async (req, res) =>{
    try {
        const post = await Posts.edit(req.params.id, req.body)
        console.log(post)
        res.json(post)
    } catch (err) {
        res.status(400).json(err)
    }
}

const remove = async (req, res) => {
    try {
        await Posts.findByIdAndDelete(req.params.id)
        res.send('item deleted')
    } catch (err) {
        res.status(400).json(err)
    }
}

const updated = async (req, res) => {
    try {
        const newPost = await Posts.findByIdAndUpdate(req.params.id, req.body)
        console.log(newPost)
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    edit,
    remove,
    updated
}