const express = require('express');
const router = express.Router();
const Post = require('../../models/Post')
const postsCtrl = require('../../controllers/api/posts')

//CREATE ROUTE for Posts/Tasks
router.post('/', async (req, res) =>{
    const post = await Post.create(req.body)
    res.json(post)
})

// router.put('/edit/:id', async (req, res) =>{
//     const post = await Post.findByIdAndUpdate(req.params.id, req.body)
//     res.json(post)
// })

    //UPDATE ROUTE for Posts/Tasks
    router.put('/edit/:id', postsCtrl.edit)
//--------------------------------------

    //DELETE ROUTE for Posts/Tasks
    router.delete('/delete/:id', postsCtrl.remove)

    //EDIT SUBMIT ROUTE for NEW Posts/Tasks
    router.put('/editsubmit/:id', postsCtrl.updated)

//READ ROUTE for Posts/Tasks

router.get('/', async (req, res) =>{
    //Showing all tasks because we have an empty object so we're not specifying a certain task
    const allTasks = await Post.find({})
    //Passing "task" props to Home component to represent each task
    //Will later be used to grab and edit/read each task individually
    res.json(allTasks)
})

module.exports = router