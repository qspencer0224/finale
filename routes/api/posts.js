const express = require('express');
const router = express.Router();
const Post = require('../../models/Post')

//CREATE ROUTE for Posts/Tasks
router.post('/', async (req, res) =>{
    await Post.create(req.body)
    res.send('created entry')
})
//UPDATE ROUTE for Posts/Tasks
router.get('edit/:id', async (req, res) =>{
    const post = await Post.findById(req.params.id)
    res.render('Edit', {current: post})
})
//--------------------------------------

//READ ROUTE for Posts/Tasks

router.get('/', async (req, res) =>{
    //Showing all tasks because we have an empty object so we're not specifying a certain task
    const allTasks = await Post.find({})
    //Passing "task" props to Home component to represent each task
    //Will later be used to grab and edit/read each task individually
    res.render('Home', {currentTask: allTasks})
})

module.exports = router